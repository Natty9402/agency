const Card = () => {
  return (
    <div>
      <div class="relative py-6 md:mr-8 px-8 rounded-lg bg-gray-100 w-full md:w-6/12 mt-6 md:mb-0">
        <div class="flex justify-between">
          <div class="w-full">
            <div class="text-blue-900 text-lg font-medium mb-2">Lifetime</div>
            <div class="text-dark-2 text-sm leading-tight">Access forever</div>
          </div>
          <div class="text-dark-1 text-4xl leading-none text-right">
            $349<span class="ml-1 text-dark-2 text-base">/once</span>
          </div>
        </div>
        <div class="border-b border-light-2 w-full mt-6 mb-8"></div>
        <ul class="mb-10">
          <li class="flex items-center gap-1 text-blue-900 text-sm font-medium mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
            </svg>
            <span>One payment, access forever</span>
          </li>
          <li class="flex items-center gap-1 text-blue-900 text-sm font-medium mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
            </svg>
            <span>All features and benefits</span>
          </li>
        </ul>
        <a
          class="inline-flex items-center justify-center bg-blue-400 text-white h-10 px-5 rounded-lg text-sm font-medium leading-none transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-default hover:bg-blue-4 w-full"
          href="#"
        >
          <span>Get started</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
