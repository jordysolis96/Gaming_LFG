package com.codeup.capstonestarter.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Collection;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    private String platform;

    @Column(nullable = false)
    private String gamerTag;

    @Column(nullable = false)
    private String password;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user")
    @JsonIgnoreProperties("user")
    private Collection<Lfg> lfgs;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user")
    @JsonIgnoreProperties("user")
    private Collection<Event> events;

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getGamerTag() {
        return gamerTag;
    }

    public void setGamerTag(String gamerTag) {
        this.gamerTag = gamerTag;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Lfg> getLfgs() {
        return lfgs;
    }

    public void setLfgs(Collection<Lfg> lfgs) {
        this.lfgs = lfgs;
    }

    public Collection<Event> getEvents() {
        return events;
    }

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }
}
