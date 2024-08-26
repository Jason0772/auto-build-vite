<template>
  <div class="flex gap-10 flex-wrap bg-white rounded-lg">
    <div class="flex flex-1 flex-col justify-center items-center gap-4">
      <div class="text-center mb-4 max-w-[360px] text-xl text-[#a0a0a0]">Scan the QR code above to download and start using the app today!</div>
      <img :src="'./imgs/code.png'" alt="Download App QR Code" class="w-ful max-w-64">
    </div>
    <div class="flex flex-1 justify-center mb-8">
      <img :src="'./imgs/man.svg'" alt="Download App QR Code" class="w-[500px]">
    </div>
  </div>
</template>
