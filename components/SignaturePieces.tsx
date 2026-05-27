import { Heart } from "lucide-react";

const products = [
  {
    name: "Infinity Solitaire Ring",
    price: "₹ 4,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3DH7XPbm0cwt1FEEm365mMftQAyCcJw4AqbepQIXcUfaPDB1S4ig7iJKJ15osVvxBeLq7rt8fSeJqwI2b8hJ6BlrsBZTSoIEi3aIv0oIpQojcmdy_2moX5DHUkqePHvub3x9dVJAcoe40Z6i7-S6EUc8XqmGqd-EOPYMDNQbmX35tkFv3nt7EVui62bP2CMw2KjVKnpnsZWXIQcB5sRlu116c_RrhsIh84RhmhVhJfEjKuxiJp_-i6t88ungKEhL0YTVnRuIurYU"
  },
  {
    name: "Eternal Moon Pendant",
    price: "₹ 7,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV8_1DYyNkM4hc7WPaBUcaKpNVcdtquRclhpsdqkz3zUXjonzXKV5zM5UM6MevSpCSL7GRBX1qtLZIEd2kzjMLTVOU4dzZWHIZSm5Ig9-A0Aaj-hJAi0lFk0_bmXQS1mYNbh7OVoMfaAjTe-9Ogh0-BMoKmDdqf4-tJQMafE78mXnIuYXvPqwENp2uJThlAsV1mFJA-GnmY7azIhY8KNF7nHIXet80jPJQF642OYWzPFk1VmyccgaSDka1UZIPsDX6td-337JN-K0"
  },
  {
    name: "Midnight Link Bracelet",
    price: "₹ 12,800",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzHF4ut3MBdx9uwKp8PMnzzKDHCc-5UdQfnOKxJybxgF6bl2CdbofMAew1toN_DWECJyAgjG7MD33A5o-JmgTuRKeGXAKYGHo4V5TFo4oQIwwNdqc-LfmLrKNrbyKB92p8_LEeZ0QqLcj0nOaRir-EsXMThCxlA4P_zFREqO3OUhLrJWvtoT7xnSWZnc-DJ_zpjb3Xf0xYYanmVwWC5-jrYvITheAbYN0a4N0QsRqCAZ-FZFgVNOkuc4Rt91si6ndRGf9jGdCI8Uc"
  },
  {
    name: "Cascade Drop Earrings",
    price: "₹ 5,900",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5sUyQ9ti2R0w-8HX3_UxcXGDRBkq2OBr1szhYso5bNvn6gZoF0NiiRpY4uUMmyU3vtcHd-SvF1c_zHsqJP7Lgr5nh__LlKeJWYTGOU0Is8zcxiCrJ5u7ibUNcic4veJwo1RCbFCFdIWXVKpPTApPmrLP-zuph-bNKxrse6cpPaKzlto-H3ItHSgUGR86ml6PxCsh1flSKhKoFt9j21FObRomAGZ_KDx5hCAtZ8XkfJkKLXOahNltAif3xGGVCywZruwdE1wYcUG8"
  }
];

export default function SignaturePieces() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <span className="font-label-caps text-[12px] text-primary uppercase tracking-[0.3em] mb-4 block">Selected Masterpieces</span>
        <h2 className="font-headline-lg text-on-surface">Signature Collection</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group product-card-shadow bg-surface-container-low rounded-xl overflow-hidden p-3 flex flex-col h-full">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-surface-container-high relative">
              <img 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={product.image} 
              />
              <div className="absolute top-4 right-4">
                <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                  <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
            <div className="px-2 pb-4 text-center mt-auto">
              <h3 className="font-body-md uppercase tracking-[0.15em] text-[13px] text-on-surface mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="font-headline-md text-primary text-[16px]">{product.price}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="font-button text-[11px] uppercase tracking-widest border-b border-primary text-primary pb-1">
                  Quick Shop
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a className="inline-block border border-primary/20 px-12 py-5 font-button text-[12px] uppercase tracking-[0.25em] hover:bg-primary hover:text-background transition-all duration-500" href="#">
          View All Pieces
        </a>
      </div>
    </section>
  );
}
