import Image from 'next/image';

interface IProductListing {
    title: string;
    subtitle: string;
    image: string;
    tags: string[];
}

const ProductListing: React.FC<IProductListing> = ({ title, subtitle, image, tags }) => {
    return (
        <>
            <Image src={image} alt={`${title} image`} width={300} height={300} />
            <header>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </header>
            <div>
                {tags.map((tag) => (
                    <div className='tag' key={tag}>
                        {tag}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductListing;
