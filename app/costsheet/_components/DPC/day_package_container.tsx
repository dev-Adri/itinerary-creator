import "./day_package_style.css";

// todo: ask agent to convert the css to tailwindcss
// todo: download a tailwindcss autocomplete extensions for vscode

export default function DPC() {
    return (
        <fieldset className="outline-dpc">
            <legend className="legend-dpc font-mont font-extrabold">
                Tuesday 24 September, 2027
            </legend>
            <div className="package-dpc"></div>
            <div className="package-dpc"></div>
            <button className="new-package-dpc font-mont font-extrabold">
                +
            </button>
        </fieldset>
    );
}
