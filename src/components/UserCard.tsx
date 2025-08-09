import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";

const UserCard = ({ user }: { user: User }) => {
  return (
    <Card className="shadow-elevated border-border/70">
      <CardContent className="flex items-center gap-3 p-4">
        <Avatar>
          <AvatarImage src={user.avatar} alt={`${user.name} avatar`} width={40} height={40} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-medium leading-tight">{user.name}</p>
          <p className="text-xs text-muted-foreground">Suggested</p>
        </div>
        <Button onClick={() => toast({ title: "Connected!", description: `You are now connected with ${user.name}.` })}>
          Connect
        </Button>
      </CardContent>
    </Card>
  );
};

export default memo(UserCard);
