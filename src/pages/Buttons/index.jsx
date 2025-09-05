import Button from "../../components/Button";
import styles from "./Buttons.module.scss"

function ButtonsWrapper({ name, children }) {
    return (
        <fieldset className={styles['wrapper']}>
            <legend className={styles['buttons-wrapper--desc']}>{name}</legend>
            <div className={styles['buttons-wrapper']}>
                {children}
            </div>
        </fieldset>
    )
}


function Buttons() {
    return (
        <div className={styles.app}>
            <ButtonsWrapper name='Basic Button'>
                <Button>Click me</Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Primary Button'>
                <Button primary>Click me</Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Link Button'>
                <Button href="https://google.com" target="_blank">Go to Google</Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Button với Size'>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Largeeee</Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Button với onClick'>
                <Button onClick={() => alert('Clicked!')}>
                    Click Alert
                </Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Disabled Button'>
                <Button disabled onClick={() => alert('Should not show')}>
                    Disabled Button
                </Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Loading Button'>
                <Button loading onClick={() => console.log('Should not log')}>
                    Loading Button
                </Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Custom className'>
                <Button className={styles['my-custom-class']} primary>
                    Custom Styled
                </Button>
            </ButtonsWrapper>

            <ButtonsWrapper name='Button với Icon'>
                <Button primary>
                    <span>📧</span> Send Email
                </Button>
            </ButtonsWrapper>

        </div>
    )
}

export default Buttons;