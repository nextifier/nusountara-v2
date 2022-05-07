<template>
  <div
    :class="[
      'bottom-sheet',
      {
        opened: opened,
        closed: opened === false,
        moving: moving,
      },
    ]"
    v-on="handlers"
    ref="bottomSheet"
  >
    <div
      v-if="overlay"
      class="bottom-sheet__backdrop"
      :style="{ background: overlayColor }"
    />
    <div
      :style="[
        { bottom: cardP + 'px', maxWidth: maxWidth, maxHeight: maxHeight },
        { height: isFullScreen ? '100%' : 'auto' },
      ]"
      :class="[
        'bottom-sheet__card',
        { stripe: stripe, square: !rounded },
        effect,
        { 'md:!bottom-auto': alignCenterOnBiggerScreen },
      ]"
      ref="bottomSheetCard"
    >
      <div class="bottom-sheet__pan" ref="pan">
        <div class="bottom-sheet__bar" />
        <div v-if="withCloseBtn" @click="close" class="close-btn">
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div
        :style="{ height: contentH }"
        ref="bottomSheetCardContent"
        class="bottom-sheet__content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  const Hammer = require("hammerjs");
}
export default {
  data() {
    const vm = this;
    return {
      inited: false,
      opened: false,
      contentH: "auto",
      hammer: {
        pan: null,
        content: null,
      },
      contentScroll: 0,
      cardP: null,
      cardH: null,
      moving: false,
      stripe: 0,
      handlers: {
        mousedown: vm.clickOnBottomSheet,
        touchstart: vm.clickOnBottomSheet,
      },
    };
  },
  props: {
    overlay: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      type: String,
      default: "767px",
    },
    maxHeight: {
      type: String,
      default: "520px",
    },
    clickToClose: {
      type: Boolean,
      default: true,
    },
    effect: {
      type: String,
      default: "fx-fadein-scale",
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    swipeAble: {
      type: Boolean,
      default: true,
    },
    isFullScreen: {
      type: Boolean,
      default: false,
    },
    overlayColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)",
    },
    withCloseBtn: {
      type: Boolean,
      default: false,
    },
    alignCenterOnBiggerScreen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isIphone() {
      let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
      let aspect = window.screen.width / window.screen.height;
      return iPhone && aspect.toFixed(3) === "0.462";
    },
    move(event, type) {
      if (this.swipeAble) {
        let delta = -event.deltaY;
        if (
          (type === "content" && event.type === "panup") ||
          (type === "content" &&
            event.type === "pandown" &&
            this.contentScroll > 0)
        ) {
          this.$refs.bottomSheetCardContent.scrollTop =
            this.contentScroll + delta;
        } else if (event.type === "panup" || event.type === "pandown") {
          this.moving = true;
          if (event.deltaY > 0) {
            this.cardP = delta;
          }
        }
        if (event.isFinal) {
          this.contentScroll = this.$refs.bottomSheetCardContent.scrollTop;
          this.moving = false;
          if (this.cardP < -100) {
            this.opened = false;
            this.cardP = -this.cardH - this.stripe;
            document.body.style.overflow = "";
            this.$emit("closed");
          } else {
            this.cardP = 16;
          }
        }
      }
    },
    init() {
      return new Promise((resolve) => {
        this.contentH = "auto";
        this.stripe = this.isIphone() ? 20 : 0;
        this.cardH = this.$refs.bottomSheetCard.clientHeight;
        this.contentH = `${this.cardH - this.$refs.pan.clientHeight}px`;
        this.$refs.bottomSheetCard.style.maxHeight = this.maxHeight;
        this.cardP =
          this.effect === "fx-slide-from-right" ||
          this.effect === "fx-slide-from-left"
            ? 0
            : `-${this.cardH + this.stripe}px`;
        if (!this.inited) {
          this.inited = true;
          let options = {
            recognizers: [
              [Hammer.Pan, { direction: Hammer.DIRECTION_VERTICAL }],
            ],
          };
          this.hammer.pan = new Hammer(this.$refs.pan, options);
          this.hammer.pan.on("panstart panup pandown panend", (e) => {
            this.move(e, "pan");
          });
        }
        setTimeout(() => {
          resolve();
        }, 10);
      });
    },
    open() {
      this.init().then(() => {
        this.opened = true;
        this.cardP = 16;
        document.body.style.overflow = "hidden";
        this.$emit("opened");
      });
    },
    close() {
      this.opened = false;
      this.cardP =
        this.effect === "fx-slide-from-right" ||
        this.effect === "fx-slide-from-left"
          ? 0
          : -this.cardH - this.stripe;
      document.body.style.overflow = "";
      this.$emit("closed");
    },
    clickOnBottomSheet(event) {
      if (this.clickToClose) {
        if (
          event.target.classList.contains("bottom-sheet__backdrop") ||
          event.target.classList.contains("bottom-sheet")
        ) {
          this.close();
        }
      }
    },
  },
  beforeDestroy() {
    this.hammer?.pan?.destroy();
    this.hammer?.content?.destroy();
  },
};
</script>
<style lang="scss" scoped>
.bottom-sheet {
  @apply z-[99999] relative md:flex md:items-center md:justify-center;
  transition: all 0.4s ease;

  &__content {
    // @apply overflow-y-scroll pl-2 md:pl-2.5;
    &::-webkit-scrollbar {
      @apply w-2 md:w-2.5;
    }
    &::-webkit-scrollbar-track {
      @apply bg-gray-900;
    }
    &::-webkit-scrollbar-thumb {
      @apply rounded-full bg-gray-700/80 transition-colors hover:bg-gray-700;
    }
  }
  &__backdrop {
    @apply fixed inset-0 z-[9999] opacity-0 invisible;
  }
  &__card {
    width: calc(100% - 32px) !important;
    @apply max-w-sm fixed bg-gray-900 rounded-2xl overflow-hidden left-1/2 z-[9999] border border-white/10 #{!important};
    &.square {
      @apply rounded-none;
    }
    // &.stripe {
    //   @apply pb-5;
    // }
    &.fx-default {
      transform: translate(-50%, 0);
      transition: bottom 0.3s ease;
    }
    &.fx-fadein-scale {
      transform: translate(-50%, 0) scale(0.7);
      opacity: 0;
      transition: all 0.3s;
    }
    &.fx-slide-from-right {
      transform: translate(100%, 0);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }
    &.fx-slide-from-left {
      transform: translate(-100%, 0);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }
  }
  &__pan {
    @apply h-6 flex items-start pt-3 relative;
  }
  &__bar {
    @apply block w-12 h-1 rounded-full absolute left-1/2 -translate-x-1/2 cursor-pointer bg-gray-700;
  }
  & .close-btn {
    @apply bg-gray-800 bg-opacity-0 hover:bg-opacity-100 text-gray-500 p-1 rounded-full flex items-center justify-center ml-auto mr-3;
  }
  &.closed {
    @apply opacity-0 invisible;
    .bottom-sheet__backdrop {
      animation: hide 0.3s ease;
    }
  }
  &.moving {
    .bottom-sheet__card {
      transition: none;
    }
  }
  &.opened {
    @apply fixed top-0 left-0 w-full h-full;
    .bottom-sheet__backdrop {
      @apply opacity-100 visible;
      animation: show 0.3s ease;
    }
    .bottom-sheet__card {
      &.fx-fadein-scale {
        transform: translate(-50%, 0) scale(1);
        opacity: 1;
      }
      &.fx-slide-from-right {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      &.fx-slide-from-left {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  }
}
@keyframes show {
  0% {
    @apply opacity-0 invisible;
  }
  100% {
    @apply opacity-100 visible;
  }
}
@keyframes hide {
  0% {
    @apply opacity-100 visible;
  }
  100% {
    @apply opacity-0 invisible;
  }
}
</style>
