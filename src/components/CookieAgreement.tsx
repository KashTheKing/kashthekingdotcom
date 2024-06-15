function CookieAgreement() {
    return(
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">
                Hello, world! This is a toast message.
                <div className="mt-2 pt-2 border-top">
                    <button type="button" className="btn btn-primary btn-sm">Take action</button>
                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                </div>
            </div>
        </div>
    )
}

export default CookieAgreement