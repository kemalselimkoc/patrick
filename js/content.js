// ===== MODULES =====
const MODULES = [
  {
    id: "obs1", category: "observation", icon: "👁", duration: "15 dk",
    tag: { tr: "Gözlem", en: "Observation" },
    title: { tr: "Bakma Sanatı: Genel → Özel", en: "The Art of Looking: General → Specific" },
    desc: { tr: "Çoğu insan bakar ama görmez. Bu ders farkı öğretir.", en: "Most people look but don't see. This lesson teaches the difference." },
    content: {
      tr: `<h4>Neden Göremiyoruz?</h4>
<p>Beynimiz enerji tasarrufu yapar. Tanıdık ortamlarda çevreyi otomatik olarak "filtreler" — bu yüzden her gün aynı yolda yürüyüp hiçbir şey fark etmeyebilirsiniz.</p>
<h4>Sherlock'un Sistemi: Üç Aşama</h4>
<ul>
<li><strong>1. Genel Tarama (3 saniye):</strong> Bir mekâna girince önce duraksayın. Odanın bütününü gözünüzle tarayın. Kaç kişi var? Aydınlatma nasıl? Sesler nereden geliyor?</li>
<li><strong>2. Anomali Tespiti (10 saniye):</strong> "Burada ne olmamalıydı?" diye sorun. Yerinde olmayan bir nesne, uyumsuz bir kıyafet, gergin bir yüz.</li>
<li><strong>3. Derinlemesine Odak:</strong> İlginizi çeken şeye yaklaşın ve ayrıntıları inceleyin.</li>
</ul>
<div class="highlight">Patrick Jane bir odaya girer ve 10 saniye içinde kimin ne hissettiğini söylerdi. Bu sihir değil — sistematik taramadır.</div>
<h4>Bugünkü Egzersiz</h4>
<p>Bir kafede ya da parkte oturun. 5 dakika boyunca şunları yazın: kaç kişi var, kıyafet renkleri, kim kimle konuşuyor, kim telefona bakıyor. Yarın tekrar gidin — ne değişti?</p>`,
      en: `<h4>Why Can't We See?</h4>
<p>Our brain saves energy. In familiar environments, it "filters" surroundings automatically — that's why you might walk the same street every day without noticing anything new.</p>
<h4>Sherlock's System: Three Phases</h4>
<ul>
<li><strong>1. General Scan (3 seconds):</strong> When entering a room, pause first. Sweep the whole space with your eyes. How many people? Lighting? Where are the sounds coming from?</li>
<li><strong>2. Anomaly Detection (10 seconds):</strong> Ask "What shouldn't be here?" An out-of-place object, mismatched outfit, tense face.</li>
<li><strong>3. Deep Focus:</strong> Move closer to what caught your attention and examine the details.</li>
</ul>
<div class="highlight">Patrick Jane would enter a room and tell you how everyone was feeling within 10 seconds. That's not magic — it's systematic scanning.</div>
<h4>Today's Exercise</h4>
<p>Sit in a café or park. For 5 minutes, write down: how many people, clothing colors, who's talking to whom, who's looking at their phone. Go back tomorrow — what changed?</p>`
    }
  },
  {
    id: "obs2", category: "observation", icon: "🔍", duration: "20 dk",
    tag: { tr: "Gözlem", en: "Observation" },
    title: { tr: "Kişi Okuma: İpuçlarını Topla", en: "Reading People: Gather the Clues" },
    desc: { tr: "Bir kişi hakkında 60 saniyede ne öğrenebilirsin?", en: "What can you learn about a person in 60 seconds?" },
    content: {
      tr: `<h4>Sherlock'un Kişi Okuma Kategorileri</h4>
<p>Bir kişiyi gördüğünüzde şu kategorileri sırayla inceleyin:</p>
<ul>
<li><strong>Eller:</strong> Nasır yerler? Tırnak bakımı? Mürekkep lekesi? Alet izleri? Bunlar mesleği ve alışkanlıkları ele verir.</li>
<li><strong>Kıyafet:</strong> Ütülü mü yoksa buruşuk mu? Pahalı ama eskimiş mi? Pratik mi yoksa gösteriş mi?</li>
<li><strong>Yürüyüş ve Duruş:</strong> Omuzlar öne mi düşüyor (stres/yorgunluk)? Askerî dik mi? Aceleyle mi?</li>
<li><strong>Gözler:</strong> Nereye bakıyor? Kaçınıyor mu? Aşırı göz teması mı?</li>
</ul>
<h4>Önemli Uyarı</h4>
<p>Bu ipuçları olasılık üretir, kesinlik değil. Sherlock "Siz Afganistan'dan dönüyorsunuz" dediğinde bir zincir tümdengelimdi — tek bir ipucuna dayanmıyordu.</p>
<div class="highlight">Çıkarım yap, ama açık fikirli kal. Yanılmak, hiç denemememkten iyidir.</div>
<h4>Bugünkü Egzersiz</h4>
<p>Bugün 3 yabancıyı gözlemleyin. Her biri için: "Mesleği ne olabilir? Nereye gidiyor? Nasıl bir ruh hali var?" Sonra gerekçelerini not edin.</p>`,
      en: `<h4>Sherlock's Categories for Reading People</h4>
<p>When you see a person, examine these categories in order:</p>
<ul>
<li><strong>Hands:</strong> Calluses? Nail care? Ink stains? Tool marks? These reveal profession and habits.</li>
<li><strong>Clothing:</strong> Ironed or wrinkled? Expensive but worn? Practical or for show?</li>
<li><strong>Gait and Posture:</strong> Shoulders dropping forward (stress/fatigue)? Military straight? Rushed?</li>
<li><strong>Eyes:</strong> Where are they looking? Avoiding contact? Excessive eye contact?</li>
</ul>
<h4>Important Warning</h4>
<p>These clues generate probabilities, not certainties. When Sherlock said "You've been in Afghanistan," it was a chain of deductions — not based on a single clue.</p>
<div class="highlight">Make inferences, but stay open-minded. Being wrong is better than never trying.</div>
<h4>Today's Exercise</h4>
<p>Observe 3 strangers today. For each: "What might their job be? Where are they going? What mood are they in?" Then note your reasoning.</p>`
    }
  },
  {
    id: "micro1", category: "micro", icon: "😐", duration: "25 dk",
    tag: { tr: "Mikro İfadeler", en: "Micro Expressions" },
    title: { tr: "7 Evrensel Duygu", en: "7 Universal Emotions" },
    desc: { tr: "Paul Ekman'ın keşfettiği evrensel yüz ifadeleri.", en: "Universal facial expressions discovered by Paul Ekman." },
    content: {
      tr: `<h4>Mikro İfade Nedir?</h4>
<p>Mikro ifadeler, genellikle 1/25 ile 1/5 saniye arasında süren, bilinçsiz olarak gerçekleşen yüz hareketleridir. Gizlenmeye çalışılan bir duygu "kaçar" ve yüzde kısa süre görünür.</p>
<h4>Paul Ekman'ın 7 Evrensel Duygusu</h4>
<ul>
<li><strong>😊 Mutluluk:</strong> Gerçek gülümsemede (Duchenne) göz çevresindeki kaslar da kasılır — sahte gülümsemede sadece ağız kenarları.</li>
<li><strong>😢 Üzüntü:</strong> Kaşların iç köşeleri yukarı ve içe çekilir. Alt dudak büzülür.</li>
<li><strong>😠 Öfke:</strong> Kaşlar aşağı ve birbirine doğru çekilir. Dudaklar sıkışır veya dişler görünür.</li>
<li><strong>😨 Korku:</strong> Kaşlar yukarı kalkar ve birbirine yaklaşır. Göz kapakları açılır. Ağız açılabilir.</li>
<li><strong>🤢 İğrenme:</strong> Burun kıvrılır, üst dudak yukarı çekilir. Gözler kısılabilir.</li>
<li><strong>😲 Şaşkınlık:</strong> Kaşlar tam yukarı kalkar (yuvarlak). Gözler ve ağız açılır. Kısa sürelidir.</li>
<li><strong>😏 Hor görme:</strong> Yüzün tek tarafı — ağız köşesi yukarı çekilir. Asimetriktir.</li>
</ul>
<div class="highlight">Hor görme ifadesi en önemlisidir — tek taraflıdır ve kültürden bağımsızdır. Patrick Jane bir ifadeyi kaçırmıyorsa, büyük olasılıkla bunu arıyordur.</div>
<h4>Pratik</h4>
<p>Bu hafta TV haberleri izlerken sesi kapatın. Sadece yüz ifadelerini takip edin. Söylediklerini tahmin etmeye çalışın, sonra sesi açın.</p>`,
      en: `<h4>What is a Micro Expression?</h4>
<p>Micro expressions are unconscious facial movements lasting between 1/25 and 1/5 of a second. A hidden emotion "leaks" and briefly appears on the face.</p>
<h4>Paul Ekman's 7 Universal Emotions</h4>
<ul>
<li><strong>😊 Happiness:</strong> A real smile (Duchenne) also contracts the muscles around the eyes — a fake smile only moves the corners of the mouth.</li>
<li><strong>😢 Sadness:</strong> Inner corners of brows pull up and inward. Lower lip tightens.</li>
<li><strong>😠 Anger:</strong> Brows pull down and together. Lips press together or teeth show.</li>
<li><strong>😨 Fear:</strong> Brows raise and come together. Eyelids open wider. Mouth may open.</li>
<li><strong>🤢 Disgust:</strong> Nose wrinkles, upper lip raises. Eyes may narrow.</li>
<li><strong>😲 Surprise:</strong> Brows raise fully (rounded). Eyes and mouth open wide. Brief duration.</li>
<li><strong>😏 Contempt:</strong> One side of the face — corner of mouth pulls up. Asymmetric.</li>
</ul>
<div class="highlight">Contempt is the most important — it's unilateral and cross-cultural. If Patrick Jane never misses an expression, he's most likely watching for this one.</div>
<h4>Practice</h4>
<p>This week, watch TV news with the sound off. Follow only facial expressions. Try to guess what they're saying, then turn the sound on.</p>`
    }
  },
  {
    id: "micro2", category: "micro", icon: "🎭", duration: "20 dk",
    tag: { tr: "Mikro İfadeler", en: "Micro Expressions" },
    title: { tr: "Yalan Okuma: Söz vs. Beden", en: "Detecting Deception: Words vs. Body" },
    desc: { tr: "İnsanlar yalan söylediğinde ne olur? Bilinenler ve mitler.", en: "What happens when people lie? Facts and myths." },
    content: {
      tr: `<h4>Yalan Hakkındaki Mitler</h4>
<p>Popüler kültür yalan tespitini yanlış öğretti. Bunlar doğru DEĞİL:</p>
<ul>
<li>❌ "Yalancılar göz temasından kaçınır" — araştırmalar bunu desteklemiyor</li>
<li>❌ "Buruna dokunmak her zaman yalandır" — gerginlik de aynı tepkiye yol açar</li>
<li>❌ "Sola bakıyorsa hayal ediyor" — nörolinguistik programlama çürütülmüştür</li>
</ul>
<h4>Gerçekten İşe Yarayanlar</h4>
<ul>
<li><strong>Söz ve beden dili arasındaki tutarsızlık:</strong> "Evet" derken baş sallıyorsa doğru. "Evet" derken başını sallıyorsa ama omuzlar gerginse — dikkat.</li>
<li><strong>Gecikmiş tepkiler:</strong> Duygusal bir haber aldıktan 2 saniye sonra gelen üzüntü ifadesi performans olabilir.</li>
<li><strong>Konuyu değiştirme isteği:</strong> Rahatsız edici sorularda aşırı detay vermek veya konuyu kapatmak istemek.</li>
<li><strong>Ses tonu değişimi:</strong> Stres altında ses genellikle yükselir ya da kontrolsüz değişir.</li>
</ul>
<div class="highlight">Hiçbir tekil işaret kesin değildir. Patrick Jane aynı anda 5-6 işareti birden okuyordu. Küme oluştuğunda güvenilirlik artar.</div>`,
      en: `<h4>Myths About Lying</h4>
<p>Popular culture has taught us wrong things about lie detection. These are NOT true:</p>
<ul>
<li>❌ "Liars avoid eye contact" — research doesn't support this</li>
<li>❌ "Touching the nose always means lying" — nervousness causes the same response</li>
<li>❌ "Looking left means imagining" — NLP has been debunked</li>
</ul>
<h4>What Actually Works</h4>
<ul>
<li><strong>Inconsistency between words and body language:</strong> If saying "yes" while nodding — truthful. "Yes" while nodding but with tense shoulders — pay attention.</li>
<li><strong>Delayed responses:</strong> A sad expression appearing 2 seconds after emotional news may be performance.</li>
<li><strong>Wanting to change subjects:</strong> Giving excessive detail on uncomfortable questions, or wanting to close the topic.</li>
<li><strong>Voice tone changes:</strong> Under stress, voice often rises or changes uncontrollably.</li>
</ul>
<div class="highlight">No single signal is definitive. Patrick Jane read 5-6 signals simultaneously. When clusters form, reliability increases.</div>`
    }
  },
  {
    id: "mem1", category: "memory", icon: "🏛", duration: "30 dk",
    tag: { tr: "Hafıza", en: "Memory" },
    title: { tr: "Hafıza Sarayı İnşa Et", en: "Build Your Memory Palace" },
    desc: { tr: "Sherlock'un 'mind palace'ı gerçek bir tekniktir. Nasıl çalışır?", en: "Sherlock's 'mind palace' is a real technique. How does it work?" },
    content: {
      tr: `<h4>Method of Loci — 2500 Yıllık Teknik</h4>
<p>Antik Yunan hatipler binlerce satırlık konuşmayı ezberlemek için bu yöntemi kullanırdı. Beyin mekânsal hafızada son derece güçlüdür.</p>
<h4>Nasıl Çalışır?</h4>
<ul>
<li><strong>1. Bir mekân seçin:</strong> Eviniz, okulunuz, çocukluğunuzun sokağı — çok iyi bildiğiniz bir yer.</li>
<li><strong>2. Bir rota belirleyin:</strong> Kapıdan girip sola, sonra mutfak, sonra oturma odası... Hep aynı rota.</li>
<li><strong>3. Bilgiyi görselleştirin:</strong> Hatırlamak istediğiniz her bilgiyi abartılı, tuhaf, hareketli bir görsel imgeye dönüştürün ve rotanızdaki bir konuma "bırakın".</li>
<li><strong>4. Gözden geçirin:</strong> Zihninizde o rota boyunca yürüyün ve görsellerinizi "toplayın".</li>
</ul>
<div class="highlight">Abartılıdığı kadar iyi hatırlanır. Sıradan bir elma değil, dev bir kırmızı elma ki odanın ortasında patlıyor — işte böyle çalışır.</div>
<h4>Bugünkü Egzersiz</h4>
<p>10 rastgele kelimeyi bu teknikle ezberleyin: elma, mavi, kalem, köpek, kitap, güneş, tahta, yüzük, müzik, rüzgar. Yarın kontrol edin.</p>`,
      en: `<h4>Method of Loci — A 2500-Year-Old Technique</h4>
<p>Ancient Greek orators used this method to memorize thousands of lines of speech. The brain is extremely powerful in spatial memory.</p>
<h4>How It Works</h4>
<ul>
<li><strong>1. Choose a location:</strong> Your home, school, childhood street — somewhere you know very well.</li>
<li><strong>2. Set a route:</strong> Enter through the door, turn left, then kitchen, then living room... Always the same route.</li>
<li><strong>3. Visualize the information:</strong> Turn each piece of information into an exaggerated, strange, moving visual image and "place" it at a location on your route.</li>
<li><strong>4. Review:</strong> Walk mentally along that route and "collect" your images.</li>
</ul>
<div class="highlight">The more exaggerated, the better remembered. Not a plain apple — a giant red apple exploding in the middle of the room. That's how it works.</div>
<h4>Today's Exercise</h4>
<p>Memorize 10 random words using this technique: apple, blue, pen, dog, book, sun, wood, ring, music, wind. Check tomorrow.</p>`
    }
  },
  {
    id: "mem2", category: "memory", icon: "🔗", duration: "15 dk",
    tag: { tr: "Hafıza", en: "Memory" },
    title: { tr: "Bağlantı Kurma: Spaced Repetition", en: "Making Connections: Spaced Repetition" },
    desc: { tr: "Bilgiyi kalıcı hale getirmenin bilimsel yolu.", en: "The scientific way to make information permanent." },
    content: {
      tr: `<h4>Ebbinghaus'un Unutma Eğrisi</h4>
<p>Hermann Ebbinghaus 1885'te şunu keşfetti: Bir şeyi öğrendikten 1 saat sonra %56'sını, 1 gün sonra %33'ünü, 1 hafta sonra %25'ini hatırlıyoruz.</p>
<h4>Çözüm: Aralıklı Tekrar</h4>
<p>Doğru zamanlarda tekrar ederseniz, her tekrarda unutma eğrisi daha yavaş iner.</p>
<ul>
<li>Öğrendiğinizde</li>
<li>1 gün sonra</li>
<li>3 gün sonra</li>
<li>1 hafta sonra</li>
<li>2 hafta sonra</li>
<li>1 ay sonra</li>
</ul>
<h4>Bağlantı Kurma</h4>
<p>Yeni bilgiyi zaten bildiğiniz bir şeye bağlayın. Sherlock her yeni vakayı önceki vakalarla ilişkilendirirdi — bu yüzden o kadar hızlı tanırdı.</p>
<div class="highlight">"Yeni bilgi, eski bilginin kancasına takılır." Bu neden gözlemci zihin olmak geniş bir bilgi tabanı gerektirir.</div>`,
      en: `<h4>Ebbinghaus's Forgetting Curve</h4>
<p>Hermann Ebbinghaus discovered in 1885: After learning something, we remember 56% after 1 hour, 33% after 1 day, 25% after 1 week.</p>
<h4>Solution: Spaced Repetition</h4>
<p>If you review at the right times, the forgetting curve drops more slowly with each review.</p>
<ul>
<li>When you learn it</li>
<li>1 day later</li>
<li>3 days later</li>
<li>1 week later</li>
<li>2 weeks later</li>
<li>1 month later</li>
</ul>
<h4>Making Connections</h4>
<p>Connect new information to something you already know. Sherlock related each new case to previous ones — that's why he recognized things so quickly.</p>
<div class="highlight">"New knowledge hooks onto old knowledge." This is why being an observant mind requires a broad knowledge base.</div>`
    }
  },
  {
    id: "crit1", category: "critical", icon: "⚖️", duration: "20 dk",
    tag: { tr: "Eleştirel Düşünce", en: "Critical Thinking" },
    title: { tr: "Abductive Reasoning: En İyi Açıklama", en: "Abductive Reasoning: The Best Explanation" },
    desc: { tr: "Sherlock'un temel çıkarım yöntemi. Tüm kanıtları açıklayan en basit hipotez.", en: "Sherlock's core inference method. The simplest hypothesis that explains all evidence." },
    content: {
      tr: `<h4>Üç Çıkarım Türü</h4>
<ul>
<li><strong>Tümdengelim (Deduction):</strong> "Tüm insanlar ölümlüdür. Sokrates bir insandır. Sokrates ölümlüdür." — Kesin ama yeni bilgi üretmez.</li>
<li><strong>Tümevarım (Induction):</strong> "Gördüğüm 1000 karga siyahtı, tüm kargalar siyahtır." — Yeni bilgi üretir ama kesin değil.</li>
<li><strong>Abduksiyon (Abduction):</strong> "Zemin ıslak. En iyi açıklama: yağmur yağdı." — Sherlock'un yöntemi.</li>
</ul>
<h4>Abductive Reasoning Nasıl Yapılır?</h4>
<ul>
<li>Tüm gözlemleri listele</li>
<li>Her birini açıklayabilecek hipotezler üret</li>
<li>Hangi hipotez en çok gözlemi en basit şekilde açıklıyor?</li>
<li>O hipotezi geçici olarak kabul et — ama yeni kanıt gelince güncelle</li>
</ul>
<div class="highlight">"İmkânsızı eledikten sonra geriye ne kalırsa, ne kadar ihtimal dışı görünse de o doğrudur." — Sherlock Holmes. Ama dikkat: imkânsızı doğru belirlemek gerekir.</div>
<h4>Bugünkü Egzersiz</h4>
<p>Bugün garip bir şey fark ettiğinizde durun: "Bu durumu açıklayan 3 hipotez ne olabilir?" sorusunu sorun. En basit olanı seçin.</p>`,
      en: `<h4>Three Types of Inference</h4>
<ul>
<li><strong>Deduction:</strong> "All humans are mortal. Socrates is human. Socrates is mortal." — Certain but produces no new knowledge.</li>
<li><strong>Induction:</strong> "All 1000 crows I saw were black, so all crows are black." — Produces new knowledge but uncertain.</li>
<li><strong>Abduction:</strong> "The ground is wet. Best explanation: it rained." — Sherlock's method.</li>
</ul>
<h4>How to Do Abductive Reasoning</h4>
<ul>
<li>List all observations</li>
<li>Generate hypotheses that could explain each</li>
<li>Which hypothesis explains the most observations in the simplest way?</li>
<li>Accept that hypothesis provisionally — but update when new evidence arrives</li>
</ul>
<div class="highlight">"When you have eliminated the impossible, whatever remains, however improbable, must be the truth." — Sherlock Holmes. But: you must correctly identify what's impossible.</div>
<h4>Today's Exercise</h4>
<p>When you notice something strange today, stop: ask "What are 3 hypotheses that could explain this?" Choose the simplest one.</p>`
    }
  },
  {
    id: "crit2", category: "critical", icon: "🧠", duration: "20 dk",
    tag: { tr: "Eleştirel Düşünce", en: "Critical Thinking" },
    title: { tr: "Bilişsel Önyargılar: Zihnin Tuzakları", en: "Cognitive Biases: The Mind's Traps" },
    desc: { tr: "Gözlemci zihin kendi önyargılarını tanır ve onları aşar.", en: "The observant mind recognizes its own biases and overcomes them." },
    content: {
      tr: `<h4>Neden Önyargıları Bilmek Gerekir?</h4>
<p>Sherlock'u Sherlock yapan şey sadece gözlemleri değil — kendi zihninin tuzaklarından kaçınabilmesiydi. Watson ise çoğu zaman bu tuzaklara düşüyordu.</p>
<h4>En Tehlikeli Önyargılar</h4>
<ul>
<li><strong>Confirmation Bias (Doğrulama Önyargısı):</strong> Zaten inandığımız şeyi destekleyen kanıtları ararız, çürüten kanıtları görmeziz. En yaygın ve tehlikeli olanı.</li>
<li><strong>First Impression Bias:</strong> İlk izlenimimiz sonraki tüm bilgileri filtreler. "Güvenilir görünüyor" dediğimizde beyin aksini kanıtlamayı zorlaştırır.</li>
<li><strong>Availability Heuristic:</strong> Kolayca aklımıza gelen örnekleri daha sık sanırız. Uçak kazaları arabayla ölümden daha az yaygındır ama daha dramatik göründüğü için "daha tehlikeli" hissettirirler.</li>
<li><strong>Clustering Illusion:</strong> Rastlantısal verilerde anlam ararız. Şans eseri yan yana gelen iki olay "bağlantılı" görünebilir.</li>
</ul>
<div class="highlight">Sherlock aktif olarak kendine itiraz ederdi: "Bu hipotezi yanlışlayabilmek için ne bulmam gerekir?" Bu soruyu sormak sizi ortalama bir düşünürden ayırır.</div>`,
      en: `<h4>Why Know About Biases?</h4>
<p>What made Sherlock Sherlock wasn't just his observations — it was his ability to avoid his own mind's traps. Watson, on the other hand, often fell into them.</p>
<h4>The Most Dangerous Biases</h4>
<ul>
<li><strong>Confirmation Bias:</strong> We seek evidence supporting what we already believe and ignore disconfirming evidence. The most common and dangerous.</li>
<li><strong>First Impression Bias:</strong> Our first impression filters all subsequent information. Once we say "they seem trustworthy," the brain makes it harder to prove otherwise.</li>
<li><strong>Availability Heuristic:</strong> We think things that easily come to mind are more common. Plane crashes are less frequent than car deaths but feel "more dangerous" because they're more dramatic.</li>
<li><strong>Clustering Illusion:</strong> We search for meaning in random data. Two events that happen to occur together can seem "connected."</li>
</ul>
<div class="highlight">Sherlock would actively challenge himself: "What would I need to find to prove this hypothesis wrong?" Asking this question separates you from the average thinker.</div>`
    }
  }
];

// ===== WEEKLY PLAN =====
const DAY_NAMES = {
  tr: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

const WEEKLY_PLAN = [
  {
    icon: "👁",
    theme: { tr: "Gözlem Temeli", en: "Observation Foundation" },
    overview: { tr: "Bu hafta bakma ile görme arasındaki farkı öğreniyorsunuz. Her gün yeni bir gözlem egzersizi.", en: "This week you learn the difference between looking and seeing. A new observation exercise every day." },
    days: [
      { title: { tr: "Gözlem Sistemini Öğren", en: "Learn the Observation System" }, task: { tr: "Obs1 modülünü oku. Akşam bir mekânda 5 dakika gözlem yap.", en: "Read the Obs1 module. In the evening, observe a place for 5 minutes." }, duration: "20 dk" },
      { title: { tr: "Kişi Okuma", en: "Reading People" }, task: { tr: "Toplu taşımada 3 yabancıyı gözlemle. Meslek tahmini yap.", en: "Observe 3 strangers on public transport. Make profession guesses." }, duration: "15 dk" },
      { title: { tr: "Sesi Kapat", en: "Mute the Sound" }, task: { tr: "TV'yi 15 dakika sessiz izle. Sadece yüz ifadelerinden hikayeyi anla.", en: "Watch TV muted for 15 minutes. Understand the story only from facial expressions." }, duration: "15 dk" },
      { title: { tr: "Mekan Analizi", en: "Location Analysis" }, task: { tr: "Gittiğin bir mekânda: kaç kapı çıkış var, kameralar nerede, kim nerede oturuyor?", en: "In a place you visit: how many exits, where are cameras, who sits where?" }, duration: "10 dk" },
      { title: { tr: "Obs2 Modülü", en: "Obs2 Module" }, task: { tr: "Kişi okuma modülünü oku. Bugün gördüğün 5 kişi için notlar al.", en: "Read the people-reading module. Take notes on 5 people you saw today." }, duration: "25 dk" },
      { title: { tr: "Gözlem Günlüğü", en: "Observation Journal" }, task: { tr: "Bu haftanın en ilginç gözlemini yaz. Ne fark ettin? Ne kaçırdın?", en: "Write your most interesting observation this week. What did you notice? What did you miss?" }, duration: "20 dk" },
      { title: { tr: "Dinlenme + Tekrar", en: "Rest + Review" }, task: { tr: "Haftanın modüllerini gözden geçir. Hafıza sarayı için yer seç.", en: "Review this week's modules. Choose a location for memory palace." }, duration: "10 dk" }
    ]
  },
  {
    icon: "😐",
    theme: { tr: "Mikro İfadeler", en: "Micro Expressions" },
    overview: { tr: "Yüz ifadelerini okumayı öğreniyoruz. Paul Ekman'ın 7 evrensel duygusu.", en: "Learning to read facial expressions. Paul Ekman's 7 universal emotions." },
    days: [
      { title: { tr: "7 Duyguyu Öğren", en: "Learn 7 Emotions" }, task: { tr: "Micro1 modülünü oku. Her duyguyu aynaya karşı taklit et.", en: "Read Micro1 module. Mimic each emotion in the mirror." }, duration: "30 dk" },
      { title: { tr: "Gerçek vs Sahte Gülümseme", en: "Real vs Fake Smile" }, task: { tr: "YouTube'da 'Duchenne smile' ara. 10 video izle, gerçek ile sahtesini ayırt et.", en: "Search 'Duchenne smile' on YouTube. Watch 10 videos, distinguish real from fake." }, duration: "20 dk" },
      { title: { tr: "Haber İzle", en: "Watch News" }, task: { tr: "Sessize al ve politikacıları izle. Hangi duyguları gizlemeye çalışıyorlar?", en: "Mute and watch politicians. Which emotions are they trying to hide?" }, duration: "15 dk" },
      { title: { tr: "Yalan Tespiti", en: "Lie Detection" }, task: { tr: "Micro2 modülünü oku. Mitler vs gerçekler listeni yap.", en: "Read Micro2 module. Make your myths vs facts list." }, duration: "20 dk" },
      { title: { tr: "Günlük Konuşma", en: "Daily Conversation" }, task: { tr: "Bugün konuştuğun herkeste: göz teması, kaş hareketi, ağız köşesi. Not al.", en: "With everyone you speak to today: eye contact, brow movement, mouth corner. Take notes." }, duration: "Tüm gün / All day" },
      { title: { tr: "Film Analizi", en: "Movie Analysis" }, task: { tr: "Favori filminizden bir sahneyi sessiz izleyin. Sonra tekrar sesle. Ne kaçırdınız?", en: "Watch a scene from your favorite film muted. Then again with sound. What did you miss?" }, duration: "30 dk" },
      { title: { tr: "Haftalık Özet", en: "Weekly Summary" }, task: { tr: "Bu hafta en çok gördüğün duygu hangisiydi? Not defterine yaz.", en: "What emotion did you see most this week? Write in your notes." }, duration: "15 dk" }
    ]
  },
  {
    icon: "🏛",
    theme: { tr: "Hafıza Sarayı", en: "Memory Palace" },
    overview: { tr: "Sherlock'un mind palace tekniğini öğreniyoruz. 2500 yıllık Method of Loci.", en: "Learning Sherlock's mind palace technique. 2500-year-old Method of Loci." },
    days: [
      { title: { tr: "Sarayını Seç", en: "Choose Your Palace" }, task: { tr: "Mem1 modülünü oku. Evinizin zihinsel haritasını çizin.", en: "Read Mem1 module. Draw a mental map of your home." }, duration: "25 dk" },
      { title: { tr: "İlk 10 Nesne", en: "First 10 Objects" }, task: { tr: "10 rastgele nesneyi sarayına yerleştir. Sabah sırala, akşam hatırla.", en: "Place 10 random objects in your palace. List in morning, recall at evening." }, duration: "20 dk" },
      { title: { tr: "Hafıza Bilimi", en: "Memory Science" }, task: { tr: "Mem2 modülünü oku. Aralıklı tekrar takvimi oluştur.", en: "Read Mem2 module. Create a spaced repetition schedule." }, duration: "20 dk" },
      { title: { tr: "Alışveriş Listesi", en: "Shopping List" }, task: { tr: "Bugünkü alışveriş listesini (15 madde) hafıza sarayına koy. Markette kontrol et.", en: "Put today's shopping list (15 items) in your memory palace. Check at the market." }, duration: "15 dk" },
      { title: { tr: "İsim Hatırlama", en: "Name Recall" }, task: { tr: "Bugün tanıştığın herkesi hafıza sarayına ekle. Yüzlerini bir nesneyle ilişkilendir.", en: "Add everyone you meet today to your memory palace. Associate their faces with an object." }, duration: "Tüm gün / All day" },
      { title: { tr: "Sarayı Genişlet", en: "Expand the Palace" }, task: { tr: "Sarayına yeni bir oda ekle (komşunun evi, ofis vs.). 20 yeni bilgi yerleştir.", en: "Add a new room to your palace (neighbor's home, office, etc.). Place 20 new pieces of info." }, duration: "30 dk" },
      { title: { tr: "Hafıza Turu", en: "Memory Tour" }, task: { tr: "Tüm sarayını baştan sona gez. Kaçta kaçı hatırlıyorsun?", en: "Walk through your entire palace from start to finish. How much do you remember?" }, duration: "20 dk" }
    ]
  },
  {
    icon: "⚖️",
    theme: { tr: "Eleştirel Düşünce", en: "Critical Thinking" },
    overview: { tr: "Abductive reasoning ve bilişsel önyargılar. Zihnin güçlü ve zayıf yanları.", en: "Abductive reasoning and cognitive biases. The mind's strengths and weaknesses." },
    days: [
      { title: { tr: "Üç Çıkarım Türü", en: "Three Types of Inference" }, task: { tr: "Crit1 modülünü oku. Günlük 3 gözlemden hipotez üret.", en: "Read Crit1 module. Generate hypotheses from 3 daily observations." }, duration: "25 dk" },
      { title: { tr: "Önyargı Avı", en: "Bias Hunt" }, task: { tr: "Crit2 modülünü oku. Bugün kendinizde kaç tane doğrulama önyargısı yakaladınız?", en: "Read Crit2 module. How many confirmation biases did you catch in yourself today?" }, duration: "20 dk" },
      { title: { tr: "Haberleri Sorgula", en: "Question the News" }, task: { tr: "Bir haber seç. Kanıtları listele. Alternatif yorumları listele. Hangisi daha güçlü?", en: "Choose a news story. List evidence. List alternative interpretations. Which is stronger?" }, duration: "20 dk" },
      { title: { tr: "Şeytan'ın Avukatı", en: "Devil's Advocate" }, task: { tr: "Güçlü inandığınız bir şeyi seçin. Karşı argümanları 10 dakika boyunca savunun.", en: "Choose something you strongly believe. Defend the counter-arguments for 10 minutes." }, duration: "15 dk" },
      { title: { tr: "Vaka Analizi", en: "Case Analysis" }, task: { tr: "Mentalist ya da Sherlock'tan bir bölüm izle. Dedektifin hatalarını bul.", en: "Watch an episode of The Mentalist or Sherlock. Find the detective's mistakes." }, duration: "45 dk" },
      { title: { tr: "Hipotez Kur", en: "Build Hypotheses" }, task: { tr: "Bugün gördüğün 5 garip şeyi seç. Her biri için 3 hipotez üret.", en: "Choose 5 strange things you saw today. Generate 3 hypotheses for each." }, duration: "20 dk" },
      { title: { tr: "4 Hafta Değerlendirme", en: "4-Week Review" }, task: { tr: "Notlarınıza bakın. Ne değişti? Hangi beceri en çok gelişti?", en: "Look at your notes. What changed? Which skill improved the most?" }, duration: "30 dk" }
    ]
  },
  {
    icon: "🔗",
    theme: { tr: "Entegrasyon: Hepsini Birleştir", en: "Integration: Combine Everything" },
    overview: { tr: "Gözlem + mikro ifade + hafıza + eleştirel düşünceyi aynı anda kullanmak.", en: "Using observation + micro expressions + memory + critical thinking simultaneously." },
    days: [
      { title: { tr: "Tam Gözlem Seansı", en: "Full Observation Session" }, task: { tr: "Bir kafede 30 dk otur. Tüm teknikleri aynı anda uygula. Notlar al.", en: "Sit in a café for 30 min. Apply all techniques simultaneously. Take notes." }, duration: "45 dk" },
      { title: { tr: "Sosyal Bağlam", en: "Social Context" }, task: { tr: "Bir sosyal ortamda (toplantı, akşam yemeği) grup dinamiklerini izle. Kim lider? Kim gergin?", en: "In a social setting (meeting, dinner) observe group dynamics. Who's the leader? Who's tense?" }, duration: "Tüm gün / All day" },
      { title: { tr: "Aktif Dinleme", en: "Active Listening" }, task: { tr: "Bugün bir arkadaşla konuşurken sadece dinle. Cevap hazırlama. Ne öğrendين?", en: "When talking to a friend today, only listen. Don't prepare answers. What did you learn?" }, duration: "30 dk" },
      { title: { tr: "Öngörü", en: "Prediction" }, task: { tr: "Sabah bir yere gitmeden önce: ne göreceğinizi tahmin edin. Akşam kontrol edin.", en: "Before going somewhere in the morning: predict what you'll see. Check in the evening." }, duration: "15 dk" },
      { title: { tr: "Geri Bildirim Al", en: "Get Feedback" }, task: { tr: "Bir arkadaşınıza gözlemlerinizi anlatın. Ne kadarı doğruydu?", en: "Tell a friend your observations about them. How accurate were they?" }, duration: "20 dk" },
      { title: { tr: "Sessiz Gün", en: "Silent Day" }, task: { tr: "Sadece gözlemle. Minimal konuş. Çevrenizi dinle. Akşam not al.", en: "Just observe. Speak minimally. Listen to your surroundings. Take notes in the evening." }, duration: "Tüm gün / All day" },
      { title: { tr: "Hafta 5 Hazırlık", en: "Week 5 Prep" }, task: { tr: "Zayıf hissettiğiniz alanı belirleyin. Gelecek hafta ona odaklanın.", en: "Identify the area where you feel weakest. Focus on it next week." }, duration: "20 dk" }
    ]
  },
  {
    icon: "🎭",
    theme: { tr: "İleri Seviye: Deception & İletişim", en: "Advanced: Deception & Communication" },
    overview: { tr: "İnce ipuçları, soru sorma sanatı ve konuşma akışını yönetme.", en: "Subtle cues, the art of questioning, and managing conversation flow." },
    days: [
      { title: { tr: "Soru Sanatı", en: "The Art of Questions" }, task: { tr: "Bugün 10 açık uçlu soru sor. Hiç evet/hayır sorusu sorma.", en: "Ask 10 open-ended questions today. Don't ask any yes/no questions." }, duration: "Tüm gün / All day" },
      { title: { tr: "Sessizliği Kullan", en: "Use Silence" }, task: { tr: "Bir soru sorduktan sonra beklemeye dayanın. Sessizlik karşı tarafı konuşturur.", en: "After asking a question, resist the urge to fill silence. Silence makes others talk." }, duration: "Tüm gün / All day" },
      { title: { tr: "Ses Analizi", en: "Voice Analysis" }, task: { tr: "Sadece sesini duyduğun (telefon, radyo) birisinin duygusunu tahmin et.", en: "Guess the emotion of someone you only hear (phone, radio) without seeing them." }, duration: "15 dk" },
      { title: { tr: "Konuşma Haritası", en: "Conversation Map" }, task: { tr: "Bir konuşmayı kafanızda haritalayın: kim ne zaman konu değiştirdi? Neden?", en: "Map a conversation in your head: who changed the subject, when, and why?" }, duration: "20 dk" },
      { title: { tr: "Gerçek Hikaye", en: "True Story" }, task: { tr: "Birinden bir hikaye anlatmasını isteyin. Tutarsızlıkları fark edin.", en: "Ask someone to tell you a story. Notice the inconsistencies." }, duration: "20 dk" },
      { title: { tr: "Yazılı Analiz", en: "Written Analysis" }, task: { tr: "Bir e-postayı ya da mesajı analiz edin: ne söylüyor ve ne söylemiyor?", en: "Analyze an email or message: what does it say and what does it NOT say?" }, duration: "15 dk" },
      { title: { tr: "Haftalık Değerlendirme", en: "Weekly Review" }, task: { tr: "Bu hafta en önemli gözleminiz ne oldu? Not defterine yaz.", en: "What was your most important observation this week? Write in your notes." }, duration: "20 dk" }
    ]
  },
  {
    icon: "🧩",
    theme: { tr: "Örüntü Tanıma", en: "Pattern Recognition" },
    overview: { tr: "Bireysel gözlemlerden genel örüntülere ulaşmak. İnsan davranışındaki tekrarlar.", en: "Moving from individual observations to general patterns. Repeating patterns in human behavior." },
    days: [
      { title: { tr: "Kişisel Örüntüler", en: "Personal Patterns" }, task: { tr: "Kendinizin stres altındaki 3 alışkanlığını belgeleyin.", en: "Document 3 of your own habits under stress." }, duration: "15 dk" },
      { title: { tr: "Sosyal Örüntüler", en: "Social Patterns" }, task: { tr: "İş yerinde ya da okulda: toplantılarda kim daima aynı şeyi yapar?", en: "At work or school: who always does the same thing in meetings?" }, duration: "Tüm gün / All day" },
      { title: { tr: "Örüntü Boz", en: "Break the Pattern" }, task: { tr: "Kendi bir alışkanlığınızı kasıtlı olarak değiştirin. Etrafınızdaki tepkiyi gözlemleyin.", en: "Deliberately change one of your own habits. Observe reactions around you." }, duration: "Tüm gün / All day" },
      { title: { tr: "Tahmin Günü", en: "Prediction Day" }, task: { tr: "Tanıdığınız 5 kişinin bugün nasıl davranacağını tahmin edin. Akşam kontrol edin.", en: "Predict how 5 people you know will behave today. Check in the evening." }, duration: "10 dk sabah / morning" },
      { title: { tr: "İstisnalar", en: "Exceptions" }, task: { tr: "Beklediğinizin aksine davranan birisini fark edin. Neden farklıydı?", en: "Notice someone who behaved contrary to your expectations. Why were they different?" }, duration: "Tüm gün / All day" },
      { title: { tr: "Ortam Etkisi", en: "Environmental Effect" }, task: { tr: "Farklı bir ortama girin (yeni kafe, farklı semte yürüyüş). Kendinizin nasıl değiştiğini gözlemleyin.", en: "Enter a new environment. Observe how you yourself change." }, duration: "1 saat / hour" },
      { title: { tr: "Hafta 7 Özeti", en: "Week 7 Summary" }, task: { tr: "Bu haftanın en önemli örüntüsünü not et.", en: "Note this week's most important pattern." }, duration: "15 dk" }
    ]
  },
  {
    icon: "🏆",
    theme: { tr: "Ustalaşma: Gerçek Hayat Vakaları", en: "Mastery: Real Life Cases" },
    overview: { tr: "8 haftanın zirvesi. Gerçek hayat senaryolarında tüm becerilerini kullan.", en: "The peak of 8 weeks. Use all your skills in real-life scenarios." },
    days: [
      { title: { tr: "Tam Vaka: İş Görüşmesi", en: "Full Case: Job Interview" }, task: { tr: "Bir arkadaşınızla sahte iş görüşmesi yapın. Tüm teknikleri uygulayın.", en: "Do a mock job interview with a friend. Apply all techniques." }, duration: "45 dk" },
      { title: { tr: "Tam Vaka: Anlaşmazlık", en: "Full Case: Disagreement" }, task: { tr: "Günlük bir anlaşmazlıkta: gözlemle, dinle, hipotez kur, soru sor.", en: "In a daily disagreement: observe, listen, form hypothesis, ask questions." }, duration: "Tüm gün / All day" },
      { title: { tr: "Tam Vaka: Yabancı Ortam", en: "Full Case: Unfamiliar Environment" }, task: { tr: "Hiç gitmediğiniz bir yere gidin. Tüm tekniklerle analiz edin.", en: "Go to a place you've never been. Analyze with all techniques." }, duration: "2 saat / hours" },
      { title: { tr: "Kendinizi Değerlendirin", en: "Self-Assessment" }, task: { tr: "1. haftadaki gözlem günlüğünüze bakın. Ne kadar ilerlediğinizi görün.", en: "Look at your week 1 observation journal. See how far you've come." }, duration: "30 dk" },
      { title: { tr: "Başkasını Eğitin", en: "Teach Someone Else" }, task: { tr: "Öğrendiklerinizden birini bir arkadaşınıza anlatın. Öğretmek en iyi öğrenme yöntemidir.", en: "Explain one thing you've learned to a friend. Teaching is the best learning method." }, duration: "30 dk" },
      { title: { tr: "Zayıf Noktaları Güçlendir", en: "Strengthen Weak Points" }, task: { tr: "En düşük quiz skorunuzu aldığınız kategoride 30 dk çalışın.", en: "Work for 30 minutes in the category where you got your lowest quiz score." }, duration: "30 dk" },
      { title: { tr: "🏆 Program Tamamlandı!", en: "🏆 Program Complete!" }, task: { tr: "Tebrikler! 8 haftayı tamamladınız. Artık gözlemci bir zihne sahipsiniz. Pratik etmeyi bırakmayın.", en: "Congratulations! You've completed 8 weeks. You now have an observant mind. Never stop practicing." }, duration: "— " }
    ]
  }
];

// ===== QUIZ QUESTIONS =====
const QUIZ_QUESTIONS = [
  {
    category: "observation",
    q: { tr: "Sherlock Holmes'un gözlem sisteminde doğru sıralama hangisidir?", en: "Which is the correct order in Sherlock Holmes's observation system?" },
    options: {
      tr: ["Özel → Genel → Anomali", "Genel → Anomali → Derinlemesine Odak", "Anomali → Genel → Özel", "Özel → Anomali → Genel"],
      en: ["Specific → General → Anomaly", "General → Anomaly → Deep Focus", "Anomaly → General → Specific", "Specific → Anomaly → General"]
    },
    answer: 1,
    explain: {
      tr: "Doğru sıralama: Önce genel tarama (odanın bütünü), sonra anomali tespiti (ne olmamalı?), sonra derinlemesine odak.",
      en: "Correct order: First general scan (the whole room), then anomaly detection (what shouldn't be here?), then deep focus."
    }
  },
  {
    category: "micro",
    q: { tr: "Paul Ekman'a göre hangi duygu ifadesi asimetriktir (yüzün tek tarafında görülür)?", en: "According to Paul Ekman, which emotional expression is asymmetric (seen on only one side of the face)?" },
    options: {
      tr: ["Korku", "Şaşkınlık", "Hor görme", "Üzüntü"],
      en: ["Fear", "Surprise", "Contempt", "Sadness"]
    },
    answer: 2,
    explain: {
      tr: "Hor görme (contempt) tek taraflıdır — ağız köşesinin yalnızca bir tarafı yukarı çekilir. Bu onu diğer tüm evrensel duygulardan ayırır.",
      en: "Contempt is unilateral — only one corner of the mouth pulls up. This distinguishes it from all other universal emotions."
    }
  },
  {
    category: "micro",
    q: { tr: "Gerçek (Duchenne) gülümsemenin sahte gülümsemeden farkı nedir?", en: "What distinguishes a real (Duchenne) smile from a fake smile?" },
    options: {
      tr: ["Sadece üst dişler görünür", "Göz çevresindeki kaslar da kasılır", "Dudaklar daha geniş açılır", "Burun kıvrılır"],
      en: ["Only upper teeth are visible", "Muscles around the eyes also contract", "Lips open wider", "Nose wrinkles"]
    },
    answer: 1,
    explain: {
      tr: "Gerçek gülümsemede (Duchenne) orbicularis oculi kası kasılarak göz köşelerinde kırışıklık oluşturur. Sahte gülümsemede sadece ağız kasları hareket eder.",
      en: "In a real (Duchenne) smile, the orbicularis oculi muscle contracts, creating wrinkles at the corners of the eyes. A fake smile only moves the mouth muscles."
    }
  },
  {
    category: "memory",
    q: { tr: "Hafıza Sarayı (Method of Loci) tekniğinde bilgilerin yerleştirildiği yer neresidir?", en: "In the Memory Palace (Method of Loci) technique, where is information placed?" },
    options: {
      tr: ["Zihinsel bir liste", "Gerçek bir mekan karşısında", "İyi bilinen bir mekanın rotasındaki konumlar", "Rastgele hayal edilen objeler"],
      en: ["A mental list", "In front of a real location", "Positions along a route in a well-known location", "Randomly imagined objects"]
    },
    answer: 2,
    explain: {
      tr: "Method of Loci'de bilgiler, çok iyi bilinen bir mekanın (ev, okul) belirli bir rotasındaki konumlara abartılı görsel imgeler olarak yerleştirilir.",
      en: "In Method of Loci, information is placed as exaggerated visual images at specific positions along a route in a well-known location (home, school)."
    }
  },
  {
    category: "memory",
    q: { tr: "Ebbinghaus'un araştırmalarına göre bir şeyi öğrendikten 1 gün sonra ne kadarını hatırlıyoruz?", en: "According to Ebbinghaus's research, how much do we remember 1 day after learning something?" },
    options: {
      tr: ["%75", "%56", "%33", "%10"],
      en: ["75%", "56%", "33%", "10%"]
    },
    answer: 2,
    explain: {
      tr: "Ebbinghaus'un unutma eğrisine göre: 1 saat sonra %56, 1 gün sonra %33, 1 hafta sonra %25. Aralıklı tekrar bu eğriyi yavaşlatır.",
      en: "According to Ebbinghaus's forgetting curve: 56% after 1 hour, 33% after 1 day, 25% after 1 week. Spaced repetition slows this curve."
    }
  },
  {
    category: "critical",
    q: { tr: "'Eliminating the impossible' ifadesini kullanan Sherlock Holmes hangi çıkarım yöntemini kullanmaktadır?", en: "Sherlock Holmes using 'eliminating the impossible' employs which type of reasoning?" },
    options: {
      tr: ["Tümevarım (Induction)", "Tümdengelim (Deduction)", "Abduksiyon (Abduction)", "Analoji"],
      en: ["Induction", "Deduction", "Abduction", "Analogy"]
    },
    answer: 2,
    explain: {
      tr: "Holmes abductive reasoning kullanır: mevcut kanıtları en iyi açıklayan hipotezi seçer. 'İmkânsızı elemek' bu sürecin bir parçasıdır.",
      en: "Holmes uses abductive reasoning: selecting the hypothesis that best explains the available evidence. 'Eliminating the impossible' is part of this process."
    }
  },
  {
    category: "critical",
    q: { tr: "Doğrulama önyargısı (Confirmation Bias) nedir?", en: "What is confirmation bias?" },
    options: {
      tr: ["Her şeyde anlam aramak", "Zaten inandığımız şeyi destekleyen kanıtları seçmek", "İlk izlenimi abartmak", "Rastlantıyı bağlantı sanmak"],
      en: ["Searching for meaning in everything", "Selecting evidence that supports what we already believe", "Exaggerating first impressions", "Mistaking coincidence for connection"]
    },
    answer: 1,
    explain: {
      tr: "Doğrulama önyargısı: Zaten sahip olduğumuz inançları destekleyen bilgileri ararız ve onlarla çelişen kanıtları görmezden geliriz. En yaygın bilişsel önyargıdır.",
      en: "Confirmation bias: We seek information that supports our existing beliefs and ignore evidence that contradicts them. It's the most common cognitive bias."
    }
  },
  {
    category: "observation",
    q: { tr: "Bir kişinin mesleğini okurken Sherlock Holmes hangi vücut bölgesine özellikle dikkat eder?", en: "When reading a person's profession, which body part does Sherlock Holmes pay special attention to?" },
    options: {
      tr: ["Gözler", "Eller", "Yürüyüş", "Saç"],
      en: ["Eyes", "Hands", "Gait", "Hair"]
    },
    answer: 1,
    explain: {
      tr: "Eller meslek hakkında çok fazla ipucu taşır: nasır yerleri, lekeler, kesikler, mürekkep izleri, alet kullanım izleri vs. Holmes buna özellikle dikkat eder.",
      en: "Hands carry many clues about profession: calluses, stains, cuts, ink marks, tool use traces, etc. Holmes pays special attention to these."
    }
  },
  {
    category: "micro",
    q: { tr: "Yalan tespitinde hangi yöntem araştırmalarla desteklenmez?", en: "Which lie detection method is NOT supported by research?" },
    options: {
      tr: ["Söz ve beden dili tutarsızlığı", "Gecikmiş duygusal tepkiler", "Sola bakış = hayal kurma", "Ses tonu değişimi"],
      en: ["Inconsistency between words and body language", "Delayed emotional responses", "Looking left = fabricating", "Voice tone changes"]
    },
    answer: 2,
    explain: {
      tr: "NLP'nin 'göz erişim işaretleri' teorisi bilimsel araştırmalarla çürütülmüştür. Sola bakmak yalan söylemeyi göstermez.",
      en: "NLP's 'eye accessing cues' theory has been debunked by scientific research. Looking left does not indicate lying."
    }
  },
  {
    category: "memory",
    q: { tr: "Hafıza Sarayı'nda en iyi hatırlama için imgeler nasıl olmalıdır?", en: "For best recall in a Memory Palace, how should images be?" },
    options: {
      tr: ["Gerçekçi ve sıradan", "Küçük ve sessiz", "Abartılı, tuhaf ve hareketli", "Siyah beyaz ve basit"],
      en: ["Realistic and ordinary", "Small and quiet", "Exaggerated, strange, and moving", "Black-and-white and simple"]
    },
    answer: 2,
    explain: {
      tr: "Beyin olağandışı, abartılı, hareketli, duygusal yüklü ve tuhaf görüntüleri çok daha iyi hatırlar. Sıradan imgeler hafızada silinir.",
      en: "The brain remembers unusual, exaggerated, moving, emotionally charged, and strange images much better. Ordinary images fade from memory."
    }
  },
  {
    category: "critical",
    q: { tr: "Bir hipotezi test etmenin en güçlü yolu nedir?", en: "What is the strongest way to test a hypothesis?" },
    options: {
      tr: ["Destekleyen kanıt ara", "Çürütmeye çalış", "Başkasına sor", "Sezgine güven"],
      en: ["Search for supporting evidence", "Try to disprove it", "Ask someone else", "Trust your intuition"]
    },
    answer: 1,
    explain: {
      tr: "Karl Popper'ın falsifiability ilkesi: Bir hipotez ancak yanlışlanabiliyorsa bilimseldir. Sherlock da aktif olarak kendi hipotezlerini çürütmeye çalışırdı.",
      en: "Karl Popper's falsifiability principle: A hypothesis is scientific only if it can be proven wrong. Sherlock also actively tried to disprove his own hypotheses."
    }
  },
  {
    category: "observation",
    q: { tr: "Patrick Jane ve Sherlock Holmes'un ortak en temel becerisi nedir?", en: "What is the most fundamental shared skill of Patrick Jane and Sherlock Holmes?" },
    options: {
      tr: ["Yüksek IQ", "Sistematik gözlem + aktif merak + disiplinli pratik", "Fotoğrafik hafıza", "Empatik zeka"],
      en: ["High IQ", "Systematic observation + active curiosity + disciplined practice", "Photographic memory", "Empathic intelligence"]
    },
    answer: 1,
    explain: {
      tr: "Her ikisinin de ortak paydası doğuştan gelen bir yetenek değil — sistematik gözlem, aktif merak ve kasıtlı pratikle geliştirilen becerilerdir.",
      en: "The common denominator of both is not innate talent — they are skills developed through systematic observation, active curiosity, and deliberate practice."
    }
  }
];
