#🌟 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.  getElementById()

    🔹 কাজ: HTML-এর কোনো একটা id-এর মাধ্যমে একটা নির্দিষ্ট element খুঁজে আনে।
    🔹 ফলাফল: একটা মাত্র element রিটার্ন করে।
    🔹 ব্যবহার: যখন জানো যে ওই id শুধু একটা element-এর জন্য ব্যবহার হয়েছে।

2.  getElementsByClassName()

    🔹 কাজ: একই class-এর যতো element আছে, সব খুঁজে আনে।
    🔹 ফলাফল: HTMLCollection (একটা array-এর মতো), অনেকগুলো element রিটার্ন করে।
    🔹 ব্যবহার: একাধিক element যদি একই class দিয়ে বানানো হয়।

3.  querySelector()
    🔹 কাজ: CSS selector দিয়ে element খুঁজে আনে।
    🔹 ফলাফল: প্রথম মেলানো element-টা রিটার্ন করে।
    🔹 ব্যবহার: CSS selector-style দিয়ে যেকোনো element খোঁজা যায়।

4.  querySelectorAll()
    🔹 কাজ: CSS selector দিয়ে মিলছে এমন সব element খুঁজে আনে।
    🔹 ফলাফল: NodeList (একটা static list), অনেকগুলো element রিটার্ন করে।
    🔹 ব্যবহার: একাধিক element চাইলে (যেমন: class, tag বা attribute match করলে)।

#🌟Q-02:How do you create and insert a new element into the DOM?
ans:JavaScript দিয়ে নতুন একটি HTML element তৈরি করে ওয়েবপেজে (DOM-এ) ঢোকাতে হয়।
নতুন element তৈরি করতে document.createElement() ব্যবহার করি, তারপর textContent দিয়ে লেখা বসাই, চাইলে class/id/স্টাইল সেট করি। তারপর যেই জায়গায় বসাতে চাই, সেই parent element খুঁজে appendChild() দিয়ে DOM-এ ঢুকিয়ে দিই।

#🌟Q-03:What is Event Bubbling and how does it work?
Ans:Event Bubbling মানে হলো, যখন আমি কোনো element-এ event trigger করি (যেমন click), সেটা শুধু ওই element-এ সীমাবদ্ধ না থেকে DOM-এর উপরের দিকের parent element গুলোর কাছেও পৌঁছে যায়।
এটা উপরের দিক দিয়ে propagate করে — একে bubbling বলে।
চাইলে event.stopPropagation() দিয়ে এই bubbling বন্ধ করে দিতে পারি।

#🌟Q-04:What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation হলো এমন একটি টেকনিক যেখানে আমি parent element-এর উপরে ইভেন্ট listener বসাই এবং bubbling-এর মাধ্যমে child element-এর ইভেন্ট হ্যান্ডল করি। এতে performance ভালো হয়, কোড ছোট হয়, এবং dynamically তৈরি হওয়া element-এর জন্যও কাজ করে।

#🌟Q-05:What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() ব্যবহার করি যখন browser-এর default action বন্ধ করতে চাই — যেমন form submit বা link redirect।
আর stopPropagation() ব্যবহার করি যখন event যেন parent element-এ না পৌঁছায়, সেটা কন্ট্রোল করতে চাই
