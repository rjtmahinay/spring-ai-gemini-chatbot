package com.rjtmahinay.ai.endpoints;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;

@Endpoint
@AnonymousAllowed
@RequiredArgsConstructor
public class ChatEndpoint {

    private final ChatClient chatClient;

    /**
     * Generate a chat message that will interact to an AI Model
     * @param message The user prompt
     * @return Response of the AI Model
     */
    public String generateChatMessage(String message) {
        return chatClient.prompt().user(message).call().content();
    }
}
