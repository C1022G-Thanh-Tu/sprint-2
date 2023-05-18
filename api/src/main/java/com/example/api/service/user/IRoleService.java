package com.example.api.service.user;

import com.example.api.entity.user.Role;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName (String name);
}
