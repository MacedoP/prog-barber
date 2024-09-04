import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

const  Header = () => {
    return(
        <Card>
            <CardContent className="justify-between flex flex-row items-center p-5">
                <img src="/logo.png" alt="logo" height={18} width={120} />
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>

            </CardContent>
        </Card>
    )
}
export default Header ; 