import { Component } from "react";
import FeaturedArticle from "./components/FeaturedArticle/FeaturedArticle";
import Menu from "./components/Menu/Menu";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    const articles = [
      {title: "Hello WatchKit", body: "Last month Apple release the anticipated WatchKit Framework for develpoers in the form of iOS 8.2 beta SDK release. The WatchKit framwork enables the developers to create Apple Watch applications. In this article wea re going to focus on the basics of getting started with the WatchKit frameworkd and developing apps for the Apple Watch", comments: "12", likes:"124"},
      {title: "Introduction to Swift", body: "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development by it clearly reflects the inteions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started", comments: "15", likes:"45"}

    ]
    return(
      <div>
        <Menu/>
        <FeaturedArticle />
        <Articles allArticles = {articles} />
        <Footer />
      </div>
    )
  }
}

export default App;
