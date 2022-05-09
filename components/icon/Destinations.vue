<template>
  <div>
    <svg
      v-if="$route.name == 'destinations'"
      class="h-full fill-current text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-428 -188)">
        <path
          d="M17.5,6.7A8.626,8.626,0,0,0,8.88,0H8.87A8.624,8.624,0,0,0,.25,6.69C-.92,11.85,2.24,16.22,5.1,18.97a5.422,5.422,0,0,0,7.55,0C15.51,16.22,18.67,11.86,17.5,6.7ZM8.88,11.71a3.15,3.15,0,1,1,3.15-3.15A3.15,3.15,0,0,1,8.88,11.71Z"
          transform="translate(431.12 189.75)"
        />
        <path
          d="M0,0H24V24H0Z"
          transform="translate(428 188)"
          fill="none"
          opacity="0"
        />
        <path
          d="M0,0H24V24H0Z"
          transform="translate(452 212) rotate(180)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>

    <svg
      v-else
      class="h-full fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-428 -188)">
        <g id="location">
          <path
            d="M3.87,7.73A3.865,3.865,0,1,1,7.74,3.87,3.873,3.873,0,0,1,3.87,7.73Zm0-6.23A2.37,2.37,0,1,0,6.24,3.87,2.375,2.375,0,0,0,3.87,1.5Z"
            transform="translate(436.13 194.44)"
          />
          <path
            d="M9.377,21.51a5.971,5.971,0,0,1-4.13-1.67C2.3,17-.963,12.47.267,7.08A9.116,9.116,0,0,1,9.377,0h.01A9.115,9.115,0,0,1,18.5,7.09c1.22,5.39-2.04,9.91-4.99,12.75A5.971,5.971,0,0,1,9.377,21.51Zm0-20.01a7.552,7.552,0,0,0-7.64,5.91c-1.08,4.71,1.88,8.77,4.56,11.34a4.426,4.426,0,0,0,6.17,0c2.67-2.57,5.63-6.63,4.57-11.34A7.58,7.58,0,0,0,9.377,1.5Z"
            transform="translate(430.623 189.25)"
          />
          <path
            d="M0,0H24V24H0Z"
            transform="translate(428 188)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
