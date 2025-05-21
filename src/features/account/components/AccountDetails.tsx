import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { ChevronDown, Plus } from "lucide-react";
import CustomSelect from "@/components/shared/CustomSelect";
import SAVE_FILL_ICON_IMAGE from "../../../assets/save_fill.svg";
import { COUNTRIES_DIALCDE_LIST } from "@/constants";

type Country = {
    code: string;
    label: string;
    dialCode: string;
    flag: string;
};
type CustomPhoneInputProps = {
    value: string;
    onChange?: (value: string) => void;
    onRemove: () => void;
};
const CONTACT_OWNERS = [
    { label: "Suchith Kumar", value: "suchith@Onechanneladmin.com" },
    { label: "John Doe", value: "john@example.com" },
];

export default function AccountDetails() {
    const [phones, setPhones] = useState([
        { id: Date.now(), value: "" },
    ]);

    const addPhone = () =>
        setPhones((prev) => [...prev, { id: Date.now(), value: "" }]);

    const updatePhone = (id: number, newValue: string) =>
        setPhones((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, value: newValue } : item
            )
        );

    const removePhone = (id: number) =>
        setPhones((prev) => prev.filter((item) => item.id !== id));

    return (
        <div className="bg-background p-4 rounded-xl border text-[#111827] dark:text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-medium">Business Details</h2>
                <div className="flex items-center text-sm font-normal text-[#22C55E] gap-1 cursor-pointer">
                    <img src={SAVE_FILL_ICON_IMAGE} alt="Save And Close" />
                    <span>Save & Close</span>
                </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
                <FormRow label="Account Name">
                    <Input
                        className="rounded-xl custom__phone__input__border"
                        defaultValue="TRUCK GREAR"
                        placeholder="Account Name"
                    />
                </FormRow>

                <FormRow label="Email">
                    <Input
                        className="rounded-xl custom__phone__input__border"
                        defaultValue="Jillali@Onechanneladmin.Com"
                        placeholder="Email"
                    />
                </FormRow>

                {/* Phone Section */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs">Phone Number</label>
                        <button onClick={addPhone} className="cursor-pointer">
                            <Plus className="text-primary size-5" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {phones.map((phone) => (
                            <CustomPhoneInput
                                key={phone.id}
                                value={phone.value}
                                onChange={(value) => updatePhone(phone.id, value)}
                                onRemove={() => removePhone(phone.id)}
                            />
                        ))}
                    </div>

                    <hr className="mt-3" />
                </div>

                <FormRow label="Contact Owner" showBottomBorder={false}>
                    <CustomSelect
                        options={CONTACT_OWNERS}
                        selected={CONTACT_OWNERS[0].label}
                        className="custom__phone__input__border"
                    />
                </FormRow>
            </div>
        </div>
    );
}




// -----------------------------------------------
//  These are helper components used in JSX below, This keeps the main component cleaner and easier to read
// -----------------------------------------------

function FormRow({
    label,
    children,
    showBottomBorder = true,
}: {
    label: string;
    children: React.ReactNode;
    showBottomBorder?: boolean;
}) {
    return (
        <div>
            <label className="text-xs mb-1 block">{label}</label>
            {children}
            {showBottomBorder && <hr className="mt-3" />}
        </div>
    );
}

function CustomPhoneInput({ value, onChange, onRemove }: CustomPhoneInputProps) {
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES_DIALCDE_LIST[0]);

    return (
        <div className="flex gap-2 relative">
            <CountrySelector
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
            />

            <div className="flex items-center pl-3 max-w-[164px] h-[38px] rounded-xl custom__phone__input__border">
                <span>{selectedCountry.dialCode}</span>
                <Input
                    className="border-none no-spinner"
                    type="number"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                />
            </div>

            <Button
                variant="outline"
                size="sm"
                className="w-[78px] h-[38px] rounded-xl text-red-500 text-xs border-red-500 hover:bg-transparent hover:text-red-500 cursor-pointer"
                onClick={onRemove}
            >
                Remove
            </Button>
        </div>
    );
}

function CountrySelector({
    selectedCountry,
    setSelectedCountry,
}: {
    selectedCountry: Country;
    setSelectedCountry: React.Dispatch<React.SetStateAction<Country>>;
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-25 h-[38px] flex items-center gap-1.5 rounded-xl cursor-pointer hover:bg-transparent custom__phone__input__border"
                >
                    <span>{selectedCountry.flag}</span>
                    <span className="text-[#0E253C] dark:text-white">
                        {selectedCountry.code}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="absolute w-64 p-0 left-0 z-10">
                <Command>
                    <CommandList>
                        {COUNTRIES_DIALCDE_LIST.map((country) => (
                            <CommandItem
                                key={country.code}
                                onSelect={() => setSelectedCountry(country)}
                            >
                                <span className="mr-2">{country.flag}</span>
                                {country.label} ({country.dialCode})
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}