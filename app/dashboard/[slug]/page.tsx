type PageParams = {
  slug: string;
};

export default function page({ params }: { params: PageParams }) {
  console.log("params:", { params });
  return (
    <div>
      <div>{params.slug}</div>
    </div>
  );
}
