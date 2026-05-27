import { ArrowRight, Activity } from "lucide-react";

export default function CategoryGrid() {
  return (
    <section className="py-section-gap bg-surface-container-lowest border-y border-white/5 overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-on-surface">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Large Landscape Block */}
          <div className="md:col-span-8 group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
            <img 
              alt="Bespoke Collection" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXZBGdBTB-6byEhFNtFb1qQ2IrsBDZCtLNzXfE_t_lb31y95iHDrcvY_ByXxVPILYbMZ3jWRAwH4wdqmw_GPHn0H-EtsoBenA6oJdM0IdUkx1JtoK1QbwMT-3dd1VEejIeH0fR2xvNJhIyvb3ctmaIXJRboKQgzZqNpDWeSBIIDEkRmb-LcCxdmdulK0nAlbUZyJF89ooyBk5cwDwFZzCxIHUBoQ1gDbAKP6nn9_vN-8KF_R2Eu1e3ny68p7-Uc7k1_0XpbxthT0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:bg-black/10 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-10 text-on-surface">
              <span className="font-label-caps text-[10px] bg-primary text-background px-3 py-1 uppercase tracking-widest mb-4 inline-block rounded-sm">Featured</span>
              <h3 className="font-headline-md text-[36px] mb-4">The Bespoke Studio</h3>
              <p className="font-body-md text-white/70 mb-6 max-w-md">One-of-a-kind silver pieces designed exclusively for your unique story.</p>
              <button className="font-button uppercase tracking-widest text-[11px] border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all">Explore Boutique</button>
            </div>
          </div>

          {/* Portrait Block */}
          <div className="md:col-span-4 group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
            <img 
              alt="Rings Category" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsfrpAUZZQQhJdReVRcojSF_uEH2yfRyi8ohopeHLD--POy-7QYRhiPadCwvR08SSh-F-VSD_122w0UzeGAsI-NGvRQyJld26vZhpL_LqpgHnO_0C0pt3dGV4PNXr_CWx78p4YbSYWPknBo_QXV4-DjaOXqt-oJQa8sh_kRbHWbwuJhQbntUJq9uEGnc-XjKLCOsKrV9CZMqODSf6IKXsMhOl00DndEwbWiPjkTiYQuis2T-RLZZysiJ7fGezaiDjDMaOHRxa2gyE"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-x-0 bottom-10 text-center">
              <h3 className="font-headline-md text-[28px] text-on-surface mb-4">Designer Rings</h3>
              <button className="font-button text-[11px] uppercase tracking-widest border-b border-primary text-primary pb-1">Shop Collection</button>
            </div>
          </div>

          {/* Small Square 1 */}
          <div className="md:col-span-4 group relative h-[350px] overflow-hidden rounded-2xl cursor-pointer">
            <img 
              alt="Men's Collection" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-sxXb7bhiCnGeEXHoJY_JEiigftK57hdp7s17o9BalBxTwDNCjrl9xY0JHmTHBcBrLCS2p6SnciHCx3FevyU12WkDuekUa8VN-H3JnBUvKkvIudEHVVqpA29RU_o7m50Fz1lXiQTdQeT3HDyNBzskrRvMIkDgceAe39JRP-vxLR4B7lQrKawNts_qn8Eik1V4OCD_typuRx7ITTEMOv-BoDohpTfvf-q8phsF-I-kzLcLNEMxXmQ1fTQIw58_CZjSs_AR4v9Dii8"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="font-headline-md text-[24px] text-on-surface mb-2">Men's Edit</h3>
              <ArrowRight className="text-primary w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
          </div>

          {/* Small Square 2 */}
          <div className="md:col-span-4 group relative h-[350px] overflow-hidden rounded-2xl cursor-pointer">
            <img 
              alt="Necklaces" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhczdgp4SHRgXe2neeL-KMZnwxdmksdtKtQN4BTjuroMzzC0HULFoulKnchzw2GHP8ESS0r2ty2bpnXMbF9jQVGQFR4OwG1vPGNKbISShNeBZo8WMWBYl3e8P9Pu7XoBRhqKpwsfqIHrCnBA2y4fSvPAqtJTLoac70slbnIQVgp9Y03XcrJaa_kV2GRXCdKZrsV0eV4OBCFm57W2_H5GJS-dDDXZ-J8FtI8FmfwVdL5QqoEQJVmPhAnd5ChncYqKsnVHP5XsqNJRw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="font-headline-md text-[24px] text-on-surface mb-2">Fine Necklaces</h3>
              <ArrowRight className="text-primary w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
          </div>

          {/* Small Square 3: The Silver Stack */}
          <div className="md:col-span-4 group relative h-[350px] overflow-hidden rounded-2xl cursor-pointer">
            <img 
              alt="The Silver Stack" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkxnvru98zTgoGu9VHgWMpPn-N8RYw6rRygmKW6OkfNdy9VzmaJyF9yt9gStljtt8Ru0dcPtnPVaY-ft5xmNa3OIdbvwyCuomPLFn50QdbL7O-PzV5YFaLZvbFc617zI1Z6_mVoa6ecvTFsLi1_MOUaHVeJ2s97xvLa_GxtC920_9kyLNEA-QXlZs2I1A2Y6I6RA39ZbFaBo97xdNV2hhsgG5JeFxDeWfSgIH6EIwDzkYFr08gOi-VeKePFbIp1RchbEjGUIe-pgo"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div className="relative z-10 flex flex-col items-center">
                <Activity className="text-primary w-10 h-10 mb-4 animate-pulse" strokeWidth={1.5} />
                <h3 className="font-headline-md text-on-surface mb-3 text-[26px]">The Silver Stack</h3>
                <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed max-w-xs mx-auto">Raw. Edgy. Minimal. Curated silver pieces for the modern rebel.</p>
                <button className="mt-6 font-button text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary/50 hover:border-primary pb-1 transition-all">Shop the Vibe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
