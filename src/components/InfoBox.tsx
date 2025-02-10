type Props = {
    title: string;
    content: string;
    cls: string;
};

export default function InfoBox({ title, content, cls }: Props) {
    return (
        <div className={`grid ${cls} w-full items-center`}>
            <span className="inline-block">{title}</span>
            <span className="inline-block">{content}</span>
        </div>
    );
}
