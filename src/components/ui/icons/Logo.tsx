import Image from "next/image";

type Props = {
    width: number;
    height: number;
};

export default function Logo({ width, height }: Props) {
    return (
        <Image
            src="https://s3-alpha-sig.figma.com/img/12b7/769b/dc8b25f207978aa3269ebecc36bb4a24?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LoVXRzTDx5ThxvFg1i4JMIajpw2bf4mV18X3QUiGRpjgrz-K3Qb0gcjnMC-1NO0ke5ZXaBSWU37N1e~5nO3c2qDGdbV3eJ0~D5Zje07l6Y4Id-nvwNS2sODiSjHy5cXlqb43cuf-D~N3SxRURjrGR3MxvboOm1KvBMrgjVhrmbmBn7kLUcit-hZzgpaXOvnqJ9i3NrdnR4L16mbJ7JxI5H6LwpxvI57H~y9h9lYtiAMc1Gil7s0kGcRmV-9q1oLWsZx-XPi152fhPJD3eZBhdnE0Z0sNk6s0J4jHcFbjquFne6PtHUcFtCVsPcy-k54iqql1XxH886nuvibxqZskcA__"
            alt="logo"
            width={width}
            height={height}
        />
    );
}
