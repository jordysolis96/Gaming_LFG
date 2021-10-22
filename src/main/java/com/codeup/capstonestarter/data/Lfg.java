package com.codeup.capstonestarter.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.tags.Tags;

import javax.persistence.*;

@Entity
@Table(name = "lfgs")
public class Lfg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //title should be changed to game title
    @Column(nullable = false)
    private String title;

    @Column(nullable = true)
    private String platform;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JsonIgnoreProperties({"lfgs","password"})
    private User user;

// eventually add user
// eventually add tags/requirements/preferences


    public Lfg() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
