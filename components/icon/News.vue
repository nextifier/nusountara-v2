<template>
  <div>
    <svg
      v-if="$route.name == 'news'"
      class="h-full fill-current text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-172 -188)">
        <g id="document-text">
          <path
            d="M1.12.195A.654.654,0,0,0,0,.635v3.49a2.726,2.726,0,0,0,2.75,2.67c.95.01,2.27.01,3.4.01a.631.631,0,0,0,.47-1.07C5.18,4.285,2.6,1.675,1.12.195Z"
            transform="translate(186.68 190.015)"
          />
          <path
            d="M18,8.19H15.11a4.306,4.306,0,0,1-4.3-4.3V1a1,1,0,0,0-1-1H5.57A5.277,5.277,0,0,0,0,5.57v8.86A5.277,5.277,0,0,0,5.57,20h7.86A5.277,5.277,0,0,0,19,14.43V9.19A1,1,0,0,0,18,8.19ZM9,15.75H5a.75.75,0,0,1,0-1.5H9a.75.75,0,0,1,0,1.5Zm2-4H5a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z"
            transform="translate(174.5 190)"
          />
          <path
            d="M0,0H24V24H0Z"
            transform="translate(196 212) rotate(180)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>

    <svg
      v-else
      class="h-full fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-172 -188)">
        <g id="document-text">
          <path
            d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h5a.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75h-5C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-5a.75.75,0,0,1,1.5,0v5C21.5,19.18,19.18,21.5,13.75,21.5Z"
            transform="translate(173.25 189.25)"
          />
          <path
            d="M8.75,9.5h-4C1.33,9.5,0,8.169,0,4.749v-4A.741.741,0,0,1,.46.059a.757.757,0,0,1,.82.16l8,8A.751.751,0,0,1,8.75,9.5ZM1.5,2.559v2.19C1.5,7.329,2.17,8,4.75,8H6.94Z"
            transform="translate(185.25 189.251)"
          />
          <path
            d="M6.75,1.5h-6A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h6A.755.755,0,0,1,7.5.75.755.755,0,0,1,6.75,1.5Z"
            transform="translate(178.25 200.25)"
          />
          <path
            d="M4.75,1.5h-4A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h4A.755.755,0,0,1,5.5.75.755.755,0,0,1,4.75,1.5Z"
            transform="translate(178.25 204.25)"
          />
          <path
            d="M0,0H24V24H0Z"
            transform="translate(172 188)"
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
