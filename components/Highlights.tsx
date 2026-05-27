const highlights = [
  {
    name: "Personalised",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlXZBGdBTB-6byEhFNtFb1qQ2IrsBDZCtLNzXfE_t_lb31y95iHDrcvY_ByXxVPILYbMZ3jWRAwH4wdqmw_GPHn0H-EtsoBenA6oJdM0IdUkx1JtoK1QbwMT-3dd1VEejIeH0fR2xvNJhIyvb3ctmaIXJRboKQgzZqNpDWeSBIIDEkRmb-LcCxdmdulK0nAlbUZyJF89ooyBk5cwDwFZzCxIHUBoQ1gDbAKP6nn9_vN-8KF_R2Eu1e3ny68p7-Uc7k1_0XpbxthT0",
  },
  {
    name: "Men's Chain",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3VY5REahRUBN0iVw2bRKELJsUujdeclkj-F0A6h8a9pQVHZl8eVm0vbAtusyBPY9DHbR06V_i0C4XPQTfHZFjUbeHn_fJcTcvSRHp7_zhpne1few_sDMN_pcwDmcKV5R3oFD0MhTk6nvTYqXjpVgvs7cllOAGCjgAzXNxdcvZTPohUh4GJf1y2ea3j0JqtsqXP7iD2oZFnzneGEOUB1lWDYUT3gPNyki70AskmC7dzWDzzzW8RcXUq20v399yWFgGbFnV-cC4THg",
  },
  {
    name: "Ladies Rings",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6de07NTZDby_igQaVuSNTKPnry5SKDiuHtRUTeh2todezp-1g-Obl1IOugkB9BgatjBm0RretOuFeEK9LEFMYNlNhdxR-6r6E880YxeZCb5u8tnjJCBSwYxKttOT7WBmO1OiLMFcRKETIqHftnCXNlde9-7ttu3Ep3nxT4m0bPxVwUOo_NeAQ2b4bidlvvtf2rq4QkL3IfTc6h0cLx9lc7eBQtAav2i6Gh9pyDcVfDk1U1y2ao6_ACCLwbxSHxpkc9Gerujjrq5Y",
  },
  {
    name: "Toe Ring's",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-sxXb7bhiCnGeEXHoJY_JEiigftK57hdp7s17o9BalBxTwDNCjrl9xY0JHmTHBcBrLCS2p6SnciHCx3FevyU12WkDuekUa8VN-H3JnBUvKkvIudEHVVqpA29RU_o7m50Fz1lXiQTdQeT3HDyNBzskrRvMIkDgceAe39JRP-vxLR4B7lQrKawNts_qn8Eik1V4OCD_typuRx7ITTEMOv-BoDohpTfvf-q8phsF-I-kzLcLNEMxXmQ1fTQIw58_CZjSs_AR4v9Dii8",
  },
  {
    name: "Gent's Bracelet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsfrpAUZZQQhJdReVRcojSF_uEH2yfRyi8ohopeHLD--POy-7QYRhiPadCwvR08SSh-F-VSD_122w0UzeGAsI-NGvRQyJld26vZhpL_LqpgHnO_0C0pt3dGV4PNXr_CWx78p4YbSYWPknBo_QXV4-DjaOXqt-oJQa8sh_kRbHWbwuJhQbntUJq9uEGnc-XjKLCOsKrV9CZMqODSf6IKXsMhOl00DndEwbWiPjkTiYQuis2T-RLZZysiJ7fGezaiDjDMaOHRxa2gyE",
  },
  {
    name: "Pendant's",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhczdgp4SHRgXe2neeL-KMZnwxdmksdtKtQN4BTjuroMzzC0HULFoulKnchzw2GHP8ESS0r2ty2bpnXMbF9jQVGQFR4OwG1vPGNKbISShNeBZo8WMWBYl3e8P9Pu7XoBRhqKpwsfqIHrCnBA2y4fSvPAqtJTLoac70slbnIQVgp9Y03XcrJaa_kV2GRXCdKZrsV0eV4OBCFm57W2_H5GJS-dDDXZ-J8FtI8FmfwVdL5QqoEQJVmPhAnd5ChncYqKsnVHP5XsqNJRw",
  },
];

export default function Highlights() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex space-x-6 md:space-x-8 overflow-x-auto no-scrollbar pb-4 items-start">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer min-w-fit">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-neutral-800 group-hover:ring-1 ring-neutral-500 ring-offset-2 ring-offset-neutral-950 transition-all">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-highest">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <span className="font-label-caps mt-3 text-on-surface-variant group-hover:text-primary transition-colors text-[10px] md:text-xs text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
