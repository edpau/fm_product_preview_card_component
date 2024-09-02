import productImage from "../assets/images/image-product-mobile.jpg";
import shoppingCartLogo from "../assets/images/icon-cart.svg";

const Card = () => {
  return (
    <article className="w-[91%] overflow-hidden rounded-xl bg-neutral-primary">
      <img className="" src={productImage} alt="bottle of parfum" />
      <section className="p-6">
        <h3 className="font-subHeading text-xs font-medium capitalize tracking-[0.3125em] text-neutral-primary">
          PERFUME
        </h3>
        <h2 className="mt-3 font-heading text-[2rem] font-bold leading-8 text-neutral-secondary">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="mt-4 font-body text-paragraph font-medium leading-[1.4375rem] text-neutral-primary">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mt-6 flex items-center gap-5">
          <p className="font-priceTag text-[2rem] font-bold leading-8 text-brand-primary">
            $149.99
          </p>
          <p className="font-body text-[0.8125rem] font-medium leading-6 text-neutral-primary line-through">
            $169.99
          </p>
        </div>
        <button className="mt-5 text-onbrand-primary hover:bg-brand-secondary-hover flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-brand-secondary font-body text-paragraph font-bold transition duration-300 ease-in-out">
          <img src={shoppingCartLogo} alt="shopping cart logo" /> Add To Cart
        </button>
      </section>
    </article>
  );
};

export default Card;
