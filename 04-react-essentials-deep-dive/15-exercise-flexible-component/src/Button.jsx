export default function Button({ mode = 'filled', children, className, Icon, ...props }) {
    let cssClasses = `button ${mode}-button`;

    if (Icon) {
        cssClasses += ' icon-button';
    }

    if (className) {
        cssClasses += ' ' + className;
    }
    return (
        <button className={cssClasses} {...props}>
            {Icon && (
                <span className="button-icon">
                    <Icon />
                </span>
            )}
            <span>
                {children}
            </span>
        </button>);
}