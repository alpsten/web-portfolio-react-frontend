
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__right">
                    <p className="footer__copyright">© {year} Emil Alpsten</p>
                    <a className="footer__cause" href="https://suicidezero.se/stod-oss/" target="_blank" rel="noreferrer">
                        Support Suicide Zero
                    </a>
                </div>
            </div>
        </footer>
    );
}
