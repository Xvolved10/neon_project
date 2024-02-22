const Hero_section2 = () => {
    return (
        <section class="bg-[#1A1A1A]">
                  <div class="relative mx-auto lg:max-w-none lg:px-8 md:px-4 max-w-[1472px] 2xl:px-10 z-20 pt-40">
        <h2 class="flex text-6xl font-bold leading-dense text-white  justify-center" id="cta-title">
        Made for developers
        </h2>
        <p class="flex t-xl mt-[18px] text-white 2xl:mt-4 justify-center	" >
          Launch serverless Postgres with a single command
        </p>
        <div
          class="relative mx-auto mt-12 max-w-[860px] 3xl:max-w-[738px] 2xl:mt-10 2xl:max-w-[610px] xl:mt-8 xl:max-w-[498px] lg:max-w-[584px] 	"
          id="cta-input"
        >
          <div
            id="cta-input-background"
            class="bg-[#F0F075] absolute -bottom-3.5 -left-3.5 h-full w-full rounded-full 2xl:-bottom-2.5 2xl:-left-2.5 xl:-bottom-2 xl:-left-2 md:w-[calc(100%+8px)]"
            aria-hidden="true"
          ></div>
          <div class="relative flex items-center justify-between rounded-full border-4 border-black bg-white p-2 pl-9 2xl:p-1.5 2xl:pl-7 xl:p-1 xl:pl-6 md:justify-center md:px-0 md:py-[22px]">
            <span class="whitespace-nowrap font-mono text-[28px] font-bold !leading-none xl:text-2xl lg:text-xl md:text-lg">
              $ psql -h pg.neon.tech
            </span>
            {/* <button class="inline-flex items-center justify-center font-bold !leading-none text-center whitespace-nowrap rounded-full transition-colors duration-200 outline-none t-xl  2xl:py-[21px] 2xl:px-9 xl:py-5 xl:px-8 bg-black text-white hover:bg-[#292929] disabled:bg-[#292929] relative px-10 py-[22px]  ">
              <span class="">Copy</span>
              <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0">
                Copied!
              </span>
            </button> */}
          </div>
        </div>
        <p
          id="cta-bottom-text"
          class="t-xl invisible mx-auto mt-[56px] hidden max-w-[500px] text-white opacity-0 2xl:mt-[46px] 2xl:max-w-[450px] xl:mt-10 xl:max-w-[400px]"
        >
          {" "}
          <a
            class="text-primary-1 border-b-2 border-primary-1 transition-colors duration-200 hover:border-transparent"
            href="/"
          >
            a smooth database creation
          </a>
        </p>
      </div>


        </section>
    );
};

export default Hero_section2;