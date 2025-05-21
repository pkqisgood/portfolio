'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function PingUPage() {
    const project = projects.find(p => p.id == 'pingu');
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <div className="w-full rounded-lg overflow-hidden">
                    <Image
                        src="/images/projects/pingu/dashboard.png"
                        alt="dashboard"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <p className="p1 mt-8">
                    Pingu is a custom-built WMS that manages inbound, outbound, and inventory operations for a logistics warehouse. I built the full backend system used by warehouse staff and superadmins — including barcode scanning, IMEI tracking, location assignment, return handling, and monthly billing based on real usage. Admins can set client-specific rates and generate invoices through a dedicated panel.
                </p>
                <br />
                {/* start inbound */}
                <h5 className="text-3xl md:text-4xl mt-8 mb-6 font-medium">Inbound Workflow 📦</h5>
                <p className="text-sm md:text-base italic text-(--secondary-color)">Developed the backend system for receiving goods into the warehouse.</p>
                <ul className="p1 mt-1 body-font list-disc">
                    <li>
                        Arrival confirmation: select inbound date, upload delivery order (DO), set lorry type and placement method (used for charge calculation).
                    </li>
                    <li>
                        QC scan process for verifying product quality.
                    </li>
                    <li>
                        Goods counting with barcode support.
                    </li>
                    <li>
                        IMEI/serial code entry (manual or barcode scan) linked to each product for later tracking.
                    </li>
                    <li>
                        Auto location assignment — system splits quantity and suggests optimized storage zones.
                    </li>
                    <div className="w-full rounded-lg overflow-hidden mt-5">
                        <Image
                            src="/images/projects/pingu/inbound-list.png"
                            alt="Inbound list"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="body-font p1 text-(--secondary-color)">Inbound list ⤴︎</p>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden mt-5">
                        <Image
                            src="/images/projects/pingu/inbound-details.png"
                            alt="Inbound details"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="body-font p1 text-(--secondary-color)">Inbound details ⤴︎</p>
                    </div>
                </ul>
                {/* end inbound */}
                <br />
                {/* start outbound */}
                <h5 className="text-3xl md:text-4xl mt-8 mb-6 font-medium">Outbound Workflow 📤</h5>
                <p className="text-sm md:text-base italic text-(--secondary-color)">Built the picking, packing, and dispatching logic for outbound shipments.</p>
                <ul className="p1 mt-1 body-font list-disc">
                    <li>
                        Picking list generation based on order and stock location.
                    </li>
                    <li>
                        Barcode scanning for location + each item during pick and pack.
                    </li>
                    <li>
                        Dimension and weight entry for each parcel.
                    </li>
                    <li>
                        IMEI/serial verification before final dispatch.
                    </li>
                    <li>
                        Courier integration and dynamic tracking number generation.
                    </li>
                    <li>
                        Outbound charges tracked and tied to client account.
                    </li>
                    <li>
                        Tracking code auto-generated based on courier; serial/IMEI captured.
                    </li>
                    <div className="w-full rounded-lg overflow-hidden mt-5">
                        <Image
                            src="/images/projects/pingu/outbound-list.png"
                            alt="Outbound list"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="body-font p1 text-(--secondary-color)">Outbound list ⤴︎</p>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden mt-5">
                        <Image
                            src="/images/projects/pingu/outbound-details.png"
                            alt="Outbound details"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="body-font p1 text-(--secondary-color)">Outbound details ⤴︎</p>
                    </div>
                </ul>
            </div>
            {/* end outbound */}
            <br />

            {/* start return */}
            <h5 className="text-3xl md:text-4xl mt-8 mb-6 font-medium">Return Handling 🔁</h5>
            <p className="text-sm md:text-base italic text-(--secondary-color)">Created a process for handling return orders efficiently.</p>
            <ul className="p1 mt-1 body-font list-disc">
                <li>
                    Returned orders open an issue log immediately.
                </li>
                <li>
                    Clients can mark items for disposal or return to stock through client portal.
                </li>
            </ul>
            {/* end return */}
            <br />

            {/* start inventory */}
            <h5 className="text-3xl md:text-4xl mt-8 mb-6 font-medium">Inventory & Zone Management 🗃️</h5>
            <p className="text-sm md:text-base italic text-(--secondary-color)">Implemented core backend features for stock visibility and zone control.</p>
            <ul className="p1 mt-1 body-font list-disc">
                <li>
                    CRUD for zones, locations, and item stocks.
                </li>
                <li>
                    Zone lock function: disables use of certain zones for inbound/outbound.
                </li>
                <li>
                    Real-time inventory tracking by location and serial/IMEI.
                </li>
            </ul>
            {/* end inventory */}
            <br />

            {/* start admin */}
            <h5 className="text-3xl md:text-4xl mt-8 mb-6 font-medium">Admin Panel & Billing System 🧾</h5>
            <p className="text-sm md:text-base italic text-(--secondary-color)">Built the admin dashboard used by managers or any admin with permissions to configure billing and generate invoices.</p>
            <ul className="p1 mt-1 body-font list-disc">
                <li>
                    Client-specific rate setup for inbound, outbound, and other services.
                </li>
                <li>
                    Monthly charge calculation based on completed jobs.
                </li>
                <li>
                    Invoice generation and export per client.
                </li>
                <div className="w-full rounded-lg overflow-hidden mt-5">
                    <Image
                        src="/images/projects/pingu/price-charging.png"
                        alt="Price charging"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                    <p className="body-font p1 text-(--secondary-color)">Price charging for each clients ⤴︎</p>
                </div>
            </ul>
            {/* end admin */}
            <br />
        </ProjectLayout>
    )
}