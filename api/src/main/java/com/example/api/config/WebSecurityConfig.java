package com.example.api.config;

import com.example.api.security.CustomUserDetailsService;
import com.example.api.security.JwtAuthenticationEntryPoint;
import com.example.api.security.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    CustomUserDetailsService customUserDetailsService;
    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    @Bean
    public JwtAuthenticationFilter jwtTokenFilter(){
        return new JwtAuthenticationFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors().and().csrf().disable()
                .authorizeRequests().antMatchers("/**").permitAll()
//                .authorizeRequests().antMatchers(
//                        "/login"
//                        ,"/reset-password"
//                        ,"/forgot-password"
//                        ,"/check-otp").permitAll()
//                .and().authorizeRequests().antMatchers(
//                        "/invoice-detail/**"
//                        ,"/invoice/**")
//                .hasRole("SALER")
//                .and().authorizeRequests().antMatchers(
//                        "/api/user/product/search"
//                        ,"/api/user/product/search-type"
//                        ,"/api/user/productType"
//                        ,"/api/customer"
//                        ,"/statistics/**"
//                        ,"/api/customerType"
//                        ,"/api/admins/**"
//                        ,"/api/user/product/detail")
//                .hasAnyRole("SALER","WAREHOUSE_MANAGER","STORE_MANAGER")
//                .and().authorizeRequests().antMatchers(
//                        "/api/user/product/**"
//                        ,"/api/product-size"
//                        ,"/data-entry-product/**"
//                        ,"/data-entry/**").hasRole("WAREHOUSE_MANAGER")
//                .and().authorizeRequests().antMatchers("/api/customer/**").hasRole("STORE_MANAGER")
                .anyRequest().authenticated()
                .and().exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        httpSecurity.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
