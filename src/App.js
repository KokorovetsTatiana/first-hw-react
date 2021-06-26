import Profile from "./pages/task_1/Task_1";
import user from "./pages/task_1/user.json";

export default function UserProfile() {
    return (
        <div>
            <Profile
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        </div>
    )
}