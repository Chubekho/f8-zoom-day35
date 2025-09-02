import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from "./Buttons.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    children,
    className,
    href,
    size = "medium",
    ...passProps
}) {
    const Component = href ? "a" : "button";

    const classNames = clsx(className, styles.wrapper, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
    })

    return (
        <Component
            {...passProps}
            href={href}
            className={clsx(classNames)}
        >
            {children}
        </Component>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
}

export default Button;