package com.example.login_auth_api.Dto;

public record RegisterRequestDto(
        String name,
        String email,
        String password
) {
}
