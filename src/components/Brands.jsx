import brand1 from "/src/assets/images/brands/brand1.png";
import brand2 from "/src/assets/images/brands/brand2.png";
import brand3 from "/src/assets/images/brands/brand3.png";
import brand4 from "/src/assets/images/brands/brand4.png";
import brand5 from "/src/assets/images/brands/brand5.png";
import brand6 from "/src/assets/images/brands/brand6.png";
import brand7 from "/src/assets/images/brands/brand7.png";
import brand8 from "/src/assets/images/brands/brand8.png";

const brands = [
  { name: "Amazon", image: brand1 },
  { name: "Magic Leap", image: brand2 },
  { name: "Zoho", image: brand3 },
  { name: "Accenture", image: brand4 },
  { name: "Infosys", image: brand5 },
  { name: "Wipro", image: brand6 },
  { name: "Capgemini", image: brand7 },
  { name: "Oracle", image: brand8 },
];

const Brands = () => {
  return (
    <section className="py-8 md:py-12 bg-custom-gradient">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="w-28 md:w-32 h-16 flex items-center justify-center transition-opacity hover:opacity-100 opacity-70"
              >
                <img
                  className="h-full w-full object-contain object-center"
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;