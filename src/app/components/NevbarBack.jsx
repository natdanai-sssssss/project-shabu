export default function NevbarBack() {
    return (
        <>
            <div as="nav" className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                {/* company pic*/}
                                <a href="/">
                                    <img
                                        src='https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/462348361_1271566654281761_6063916151914206361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=or6ACC2rtWQQ7kNvgEm9AG8&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=ANBXDo-9J2cX64UoITevVfS&oh=03_Q7cD1QHA6j9gJvt7oxsBNm_b71GDZ2gxdwtybqHtQtA4BYI1LA&oe=67342A74'
                                        alt="Your Company"
                                        className="h-16 w-auto"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end py-4">
                            <a href="/" className="text-base font-semibold leading-6 text-orange-700">
                                กลับหน้าหลัก <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
