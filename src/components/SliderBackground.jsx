import { Typography } from "@material-tailwind/react";

const SliderBackground = ({urlImage, title = '', description = ''}) => {
 
    return (
        <div>
            <div className="relative flex h-screen content-center items-center justify-center">
                <div className={`absolute top-0 h-full w-full bg-cover bg-center`} style={{backgroundImage: "url("+urlImage+")"}}/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <Typography
                        variant="h1"
                        color="gray"
                        className="mb-6 font-black font-permanent"
                    >
                        {title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="opacity-80 font-permanent">
                        {description}
                    </Typography>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBackground;
