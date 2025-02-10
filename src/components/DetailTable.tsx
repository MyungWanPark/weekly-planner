export default function DetailTable() {
    return (
        <section className="h-full py-10">
            <table className="w-full h-full border border-black border-collapse">
                <thead className="h-1/10">
                    <tr className="bg-extraLightGrey">
                        <th className="w-1/10 border border-black"></th>
                        <th className="w-2/5 border border-black">
                            지난주 완료사항
                        </th>
                        <th className="w-2/5 border border-black">
                            금주 예정사항
                        </th>
                    </tr>
                </thead>
                <tbody className="h-2/5">
                    <tr className="h-1/3">
                        <td className="border border-black text-center">
                            프로젝트1
                        </td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                    </tr>
                    <tr className="h-1/3">
                        <td className="border border-black text-center">
                            프로젝트2
                        </td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
