import { expertise } from "@constants";

const ProductDescription = () => {
  return (
    <section className="padding-x  pt-10 sm:pb-10 pb-6">
      <h5 className="text-[20px] leading-[28px] font-[600] text-[#000000] max-sm:text-[15px] max-sm:leading-[24px] ">
        Product Details
      </h5>
      <div className="pt-5 max-sm:pt-10 pb-10 max-sm:pb-6 grid grid-cols-5">
        <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[18px] col-span-3 max-sm:col-span-5">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi. Nulla Lorem mollit cupidatat irure. Laborum
          magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum.
        </p>
      </div>
      <h5 className="text-[20px] leading-[28px] font-[600] text-[#000000] max-sm:text-[15px] max-sm:leading-[24px] ">
        Specification
      </h5>

      <ul className="max-w-[360px] max-sm:max-w-[240px] px-3 py-5">
        {expertise.map((expertise, index) => (
          <li
            key={index}
            className="text-[16px] leading-[24px] font-[400] text-[#000] w-[85%] max-sm:text-[12px] max-sm:leading-[20px] list-disc"
          >
            {expertise}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductDescription;
