import ChatView from "Frontend/views/chat/ChatView";
import MainView from "Frontend/views/MainView";
import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";

export const routes: RouteObject[] = [
    {
        element: <MainView />,
        handle: { title: 'Main' },
        children: [
            { path: '/', element: <ChatView />, handle: { title: 'Google Gemini Chat' } }
        ],
    },
];

export const router = createBrowserRouter([...routes], {basename: new URL(document.baseURI).pathname });
