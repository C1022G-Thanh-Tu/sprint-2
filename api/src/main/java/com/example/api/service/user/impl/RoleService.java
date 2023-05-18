package com.example.api.service.user.impl;

import com.example.api.entity.user.Role;
import com.example.api.repository.user.IRoleRepository;
import com.example.api.service.user.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public Optional<Role> findByName(String name) {
        return roleRepository.findWithName(name);
    }
}
