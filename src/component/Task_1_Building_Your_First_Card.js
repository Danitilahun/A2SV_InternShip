const Card = () => {
  return (
    <div className="h-[266px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px]">
      <div className="flex h-[100%] w-[100%] gap-3">
        <div className="h-[100%] w-[89px">
          <img src="/logo.svg" className="h-[59px] w-[66px]" alt="logo" />
        </div>
        <div className="h-[100%] w-[755px] flex flex-col gap-[8px]">
          <div class="font-epilogue font-semibold text-[20px] text-blue-900">
            Social Media Assistant
          </div>
          <div class="flex w-[454px] h-[27px] gap-[8px] items-center">
            <div class="font-epilogue font-normal text-[16px] text-blue-900">
              Young Men Christians Association
            </div>
            <div class="w-[4px] h-[4px] flex items-center justify-center bg-[#7C8493] rounded-full"></div>
            <div class="font-epilogue font-normal text-[16px] text-blue-900">
              Addis Ababa, Ethiopia
            </div>
          </div>

          <div class="w-[744px] h-[112px] font-epilogue text-[16px] leading-[25.6px] text-[#25324B]">
            As a Social Media Assistant, you will work closely with the social
            media manager or marketing team to execute social media strategies
            and campaigns. You will be responsible for assisting in the creation
            and scheduling of engaging content, monitoring social media
            channels, and interacting with followers.
          </div>

          <div class="flex w-[242px] h-[31px] gap-[8px]">
            <div class="bg-[#56CDAD] w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center">
              <div class="font-epilogue font-semibold text-[12px] text-blue-900">
                In person
              </div>
            </div>

            <div class="h-[100%] w-[1.5px] bg-gray-300"></div>

            <div class="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#FFB836]">
              <div class="font-epilogue font-semibold text-[12px] text-[#FFB836]">
                Education
              </div>
            </div>

            <div class="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#4640DE]">
              <div class="font-epilogue font-semibold text-[12px] text-black">
                IT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
