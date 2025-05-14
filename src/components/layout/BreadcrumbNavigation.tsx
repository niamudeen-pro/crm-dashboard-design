import { Link } from "react-router-dom"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";
import { BREADCRUMBS_LIST } from "@/constants";


export default function BreadcrumbNavigation() {
    return (
        <div className="px-4 h-16 border-b bg-background flex items-center">
            <Breadcrumb>
                <BreadcrumbList>
                    {BREADCRUMBS_LIST?.map((item, index) => {
                        const isLast = index === BREADCRUMBS_LIST.length - 1;
                        return (
                            <React.Fragment key={item.label}>
                                <BreadcrumbItem>
                                    {item.to ? (
                                        <BreadcrumbLink asChild>
                                            <Link
                                                to={item.to}
                                                className="text-base text-black dark:text-gray-300"
                                            >
                                                {item.label}
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbLink
                                            className="text-base font-semibold text-black dark:text-white"
                                        >
                                            {item.label}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>

                                {!isLast && (
                                    <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
                                )}
                            </React.Fragment>
                        );
                    })}

                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
