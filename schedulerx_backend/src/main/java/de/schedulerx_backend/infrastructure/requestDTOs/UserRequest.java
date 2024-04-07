package de.schedulerx_backend.infrastructure.requestDTOs;

public class UserRequest {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public UserRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
