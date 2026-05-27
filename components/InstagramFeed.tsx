import { Camera, Heart } from "lucide-react";
import Image from "next/image";

const INSTAGRAM_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsfrpAUZZQQhJdReVRcojSF_uEH2yfRyi8ohopeHLD--POy-7QYRhiPadCwvR08SSh-F-VSD_122w0UzeGAsI-NGvRQyJld26vZhpL_LqpgHnO_0C0pt3dGV4PNXr_CWx78p4YbSYWPknBo_QXV4-DjaOXqt-oJQa8sh_kRbHWbwuJhQbntUJq9uEGnc-XjKLCOsKrV9CZMqODSf6IKXsMhOl00DndEwbWiPjkTiYQuis2T-RLZZysiJ7fGezaiDjDMaOHRxa2gyE",
    alt: "Minimalist silver ring on marble",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaOW193Z0CVVvmZ1AhH-qkfcxzc2nf8TYBDWAErXn0NEiSN73H11vuDOpSgVrwBYLcu0NLm_NzgYSmYCepQgE0Nf3zcID9aADOUVPpHfx8FrcCuHp9twyJO9DcUnb5UHj1qL2lgUfnR7uFfxT0v_AdaZTbHDKjAt9vuC1g2uvkjkqVwbiCNXCPqTIfEZNvKci994S2nnFyhrLz4xCJ7Wj4h23Uvhk9wmV8c09fZYyWB7Xasoy__BvUY6clbTHDfXOAPDfpcMAhrwQ",
    alt: "Silver dangling earrings on driftwood",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5vk1bo1UJNsPB0phgJaz2xcAVmsYCygSPwSEEhf6oIzELRKS_zCV8CbFjKpxXxTnspOrc8g0Mc9CxioeixmzW_Asc7lTjkapzMSX2FVCNXV0dPoyZmXG_4npy9jFmhUT-kG1AYRe-R6Rc_4HYhfXL8S-L0yLq5OH2N056VDaeRbTGqyRwS300YuY_RiU2AQh7U_eP84KTCmaTYf0j9qWqtRrKMS8Hjzudyy4FIoB0XSFN8fvXVfMbTYIr680Pl-t83cpndgLdHhQ",
    alt: "Hand wearing silver rings holding coffee",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhczdgp4SHRgXe2neeL-KMZnwxdmksdtKtQN4BTjuroMzzC0HULFoulKnchzw2GHP8ESS0r2ty2bpnXMbF9jQVGQFR4OwG1vPGNKbISShNeBZo8WMWBYl3e8P9Pu7XoBRhqKpwsfqIHrCnBA2y4fSvPAqtJTLoac70slbnIQVgp9Y03XcrJaa_kV2GRXCdKZrsV0eV4OBCFm57W2_H5GJS-dDDXZ-J8FtI8FmfwVdL5QqoEQJVmPhAnd5ChncYqKsnVHP5XsqNJRw",
    alt: "Luxury jewelry box with silver necklace",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzIzE-mvpPf_kK_7cFVrxd1Ef9zIK5mrpHna0KATDbWxjPuV6auEdY0MxvQGb6jIYK4Tb_uXjc4XRS1cXgLjG0p57nAsPomT1l2FZPAd438ddZnDas4Ieg3Pornrltroi7xkWsxDFbGRBNGheMk_7wzezPVlTcX2m-d4gyV4QqlUqb-nJ16qk24WmwFkW0_u2K4oRrkvi3nnqnwp4C3sfsWpFBka_QA6Gzr0Xb1u7ATR8UxTR4tghKBD-LZTj7oMjEiBReMjt3eI8",
    alt: "Artisan soldering a silver ring",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuKAes_fr7CxEWgTOspWkKVCu1w6SIpgvWxztjvLnia1vcpoJQFSWYnwGVtrh6u6zvdyw7Ulqm2SeNnpMo1qo1SySaVf6b3ErffClmtvkuFBwnntHyzJSkOYdn7yb37U1Aiz-u25InQ3iqgTHafGgpgR39JB3CUvHUXjQrKXdpl2GLWHde8J_N-nvYbe2szTRnTHzitMpjoXsOyR54Sqcfuswc-YSBcBLuPf1XCFt6ir-xLs4qr_Fc8YOTnQ0-p_qIp01YZC5yo3M",
    alt: "Collection of textured silver rings",
  },
];

export default function InstagramFeed() {
  return (
    <section className="pb-section-gap pt-16 bg-background">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-8 flex justify-between items-center group cursor-pointer">
        <h3 className="font-label-caps text-[11px] uppercase tracking-[0.4em] text-on-surface-variant group-hover:text-primary transition-colors duration-500">
          Follow @InfinitySilverStore
        </h3>
        <Camera className="text-primary group-hover:scale-110 transition-transform duration-500" size={20} strokeWidth={1.5} />
      </div>
      
      {/* Gapless or minimal gap bento grid for the impeccable editorial look */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-[1px] bg-white/5 border-y border-white/5">
        {INSTAGRAM_IMAGES.map((image, i) => (
          <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer bg-black">
            {/* Base Image with ultra-slow zoom on hover */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
              alt={image.alt}
              src={image.src}
              loading="lazy"
            />
            
            {/* Vignette / Overlay on hover for premium UX */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <Heart className="text-white w-8 h-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out delay-100 fill-white/20" strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
