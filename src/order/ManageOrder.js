import React from 'react'
import { Link } from 'react-router-dom'

export default function ManageOrder() {
    return (
        <div>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mb-5 px-4">
                <Link to="/manageorder" class="mr-16 font-normal active active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">Tất cả</Link>
                <Link to="success" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">Thành Công</Link>
                <Link to="cancel" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">Đã Hủy</Link>
            </nav>
            <section class="text-gray-600 body-font overflow-hidden">

                <div class="container px-5 py-5 mx-auto border-2 border-opacity-60 border-gray-200 rounded-lg">
                    <div class="flex items-baseline justify-start border-b border-gray-200 ">
                        <p class='text-2xl text-4C8787 text-xl w-1/6 mb-5'>Đơn hàng</p>
                        <p class='text-xl text-4C8787 text-xl w-2/3 mb-5'>Đơn hàng ngày 30/12/2002</p>

                    </div>
                    <div class="mt-2 -my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://statics.vinpearl.com/bun-bo-hue-ngon-o-sai-gon-5_1632128863.jpg" />
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bún Bò tái nạm</h2>
                                <p class="leading-relaxed text-xl">Bún Bò Sinh Viên - Ký túc xá khu B, Làng Đại Học</p>
                                <p class="leading-relaxed text-xl">x1</p>
                                <p class="leading-relaxed text-xl">30.000 VNĐ</p>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://statics.vinpearl.com/bun-bo-hue-ngon-o-sai-gon-5_1632128863.jpg" />
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bún Bò tái nạm</h2>
                                <p class="leading-relaxed text-xl">Bún Bò Sinh Viên</p>
                                <p class="leading-relaxed text-xl">x1</p>
                                <p class="leading-relaxed text-xl">30.000 VNĐ</p>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://statics.vinpearl.com/bun-bo-hue-ngon-o-sai-gon-5_1632128863.jpg" />
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bún Bò tái nạm</h2>
                                <p class="leading-relaxed text-xl">Bún Bò Sinh Viên</p>
                                <p class="leading-relaxed text-xl">x1</p>
                                <p class="leading-relaxed text-xl">30.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 flex items-center gap-x-4">
                        <h4 class="text-xl flex-none font-semibold leading-6 text-4C8787">Thành tiền</h4>
                        <div class="h-px flex-auto bg-gray-100"></div>
                    </div>

                    <div class="mt-5 mb-2 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">$129.99</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-700">Shipping</p>
                        <p class="text-gray-700">$4.99</p>
                    </div>
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-gray-700">Total</p>
                        <div class="">
                            <p class="mb-1 text-gray-700">$134.98 USD</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
