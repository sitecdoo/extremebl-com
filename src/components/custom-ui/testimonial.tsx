import Typography from "./typography";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-neutrals-100 px-9 py-10">
      <div className="flex items-center gap-4">
        {/* Added style to disable console warning */}
        <Image
          width={36}
          height={36}
          src="/marija-peric.jpg"
          alt="marija-peric"
          style={{ width: 36, height: 36 }}
          className="rounded-full object-cover"
        />
        <Typography fontWeight="bold">Marija Peric</Typography>
      </div>
      <Typography variant="subtitle" className="text-center">
        “Ja sam oduševljena. Instruktori su za čistu desetku, nevjerovatni
        motivatori... Proslavili smo 14 rođendan i slavljenica kaže da joj je to
        bio najbolji rođendan!”
      </Typography>
    </div>
  );
};

export default Testimonial;
