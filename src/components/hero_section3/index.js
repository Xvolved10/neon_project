import Image from "next/image";

const Hero_section3 = () => {
  return (
    <section
      class="safe-paddings bg-[#1A1A1A] pb-48 pt-[132px] 2xl:pt-28 xl:py-40 lg:py-36 md:py-24"
      id="advantages"
    >
      <div class="relative mx-auto lg:max-w-none lg:px-8 md:px-4 max-w-[1472px] 2xl:px-10 z-20">
        <ul class="mx-auto grid w-full max-w-[1300px] grid-cols-3 gap-x-20 lg:gap-y-16 md:grid-cols-1">
          <li class="max-w-[378px] 2xl:max-w-[312px] xl:max-w-[260px] lg:max-w-[192px] md:max-w-none">
            <div
              id="advantages-item-1-icon"
              class="h-24 w-24 2xl:h-20 2xl:w-20 xl:h-[72px] xl:w-[72px] lg:h-16 lg:w-16"
              aria-hidden="true"
            >
              <div>
                <Image src="/logo1.png" alt="" width={100} height={50}/>
              </div>
            </div>
            <h3
              class="t-4xl font-semibold text-white mt-6 leading-none xl:mt-5 lg:text-[28px]"
              id="advantages-item-1-title"
            >
              Scalable
            </h3>
            <p
              id="advantages-item-1-description"
              class="t-xl mt-4 text-white xl:mt-3.5"
            >
              Compute scales dynamically to ensure you're ready for peak hours.
            </p>
          </li>
          <li class="max-w-[378px] 2xl:max-w-[312px] xl:max-w-[260px] lg:max-w-[192px] md:max-w-none">
            <div
              id="advantages-item-2-icon"
              class="h-24 w-24 2xl:h-20 2xl:w-20 xl:h-[72px] xl:w-[72px] lg:h-16 lg:w-16"
              aria-hidden="true"
            >
              <div>
              <Image src="/logo2.png" alt="" width={100} height={50}/>
              </div>
            </div>
            <h3
              class="t-4xl font-semibold text-white mt-6 leading-none xl:mt-5 lg:text-[28px]"
              id="advantages-item-2-title"
            >
              Cost efficient
            </h3>
            <p
              id="advantages-item-2-description"
              class="t-xl mt-4 text-white xl:mt-3.5"
            >
              Compute scales to zero and cold storage offloads to S3 for cost
              efficiency.
            </p>
          </li>
          <li class="max-w-[378px] 2xl:max-w-[312px] xl:max-w-[260px] lg:max-w-[192px] md:max-w-none">
            <div
              id="advantages-item-3-icon"
              class="h-24 w-24 2xl:h-20 2xl:w-20 xl:h-[72px] xl:w-[72px] lg:h-16 lg:w-16"
              aria-hidden="true"
            >
              <div>
              <Image src="/logo3.png" alt="" width={100} height={50}/>
              </div>
            </div>
            <h3
              class="t-4xl font-semibold text-white mt-6 leading-none xl:mt-5 lg:text-[28px]"
              id="advantages-item-3-title"
            >
              Easy to use
            </h3>
            <p
              id="advantages-item-3-description"
              class="t-xl mt-4 text-white xl:mt-3.5"
            >
              Create a fully managed serverless Postgres instance in seconds.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero_section3;
