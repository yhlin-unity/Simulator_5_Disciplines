tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
                    },
                    colors: {
                        pvqc: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            800: '#1e40af',
                            900: '#1e3a8a',
                        }
                    }
                }
            }
        }

/* PVQC 模擬測驗系統：題庫與互動邏輯 */
// Built-in PVQC Expert & Specialized Vocabularies Database
        const BUILTIN_VOCABULARY = [
            // General Expert A-Z (PVQC Expert Words)
            { en: "algorithm", cn: "演算法", category: "EXPERT_ALL" },
            { en: "artificial intelligence", cn: "人工智慧", category: "EXPERT_ALL" },
            { en: "authentication", cn: "身分驗證；認證", category: "EXPERT_ALL" },
            { en: "bandwidth", cn: "頻寬", category: "EXPERT_ALL" },
            { en: "benchmark", cn: "基準測試；標竿", category: "EXPERT_ALL" },
            { en: "blockchain", cn: "區塊鏈", category: "EXPERT_ALL" },
            { en: "browser", cn: "瀏覽器", category: "EXPERT_ALL" },
            { en: "buffer", cn: "緩衝區", category: "EXPERT_ALL" },
            { en: "capacity", cn: "容量；能力", category: "EXPERT_ALL" },
            { en: "compatibility", cn: "相容性", category: "EXPERT_ALL" },
            { en: "cybersecurity", cn: "網路安全", category: "EXPERT_ALL" },
            { en: "data mining", cn: "資料探勘", category: "EXPERT_ALL" },
            { en: "database", cn: "資料庫", category: "EXPERT_ALL" },
            { en: "encryption", cn: "加密", category: "EXPERT_ALL" },
            { en: "framework", cn: "框架；架構", category: "EXPERT_ALL" },
            { en: "hardware", cn: "硬體", category: "EXPERT_ALL" },
            { en: "infrastructure", cn: "基礎設施", category: "EXPERT_ALL" },
            { en: "interface", cn: "介面；接口", category: "EXPERT_ALL" },
            { en: "latency", cn: "延遲", category: "EXPERT_ALL" },
            { en: "middleware", cn: "中介軟體", category: "EXPERT_ALL" },
            { en: "network", cn: "網路", category: "EXPERT_ALL" },
            { en: "optimization", cn: "最佳化", category: "EXPERT_ALL" },
            { en: "protocol", cn: "通訊協定", category: "EXPERT_ALL" },
            { en: "redundancy", cn: "備份；冗餘", category: "EXPERT_ALL" },
            { en: "scalability", cn: "可擴充性", category: "EXPERT_ALL" },
            { en: "software", cn: "軟體", category: "EXPERT_ALL" },
            { en: "telecommunication", cn: "電信；遠距通訊", category: "EXPERT_ALL" },
            { en: "virtualization", cn: "虛擬化", category: "EXPERT_ALL" },
            { en: "vulnerability", cn: "弱點；漏洞", category: "EXPERT_ALL" },
            { en: "wireless", cn: "無線的", category: "EXPERT_ALL" },

            // IT & Computer (資訊與計算機)
            { en: "application programming interface", cn: "應用程式介面 (API)", category: "IT_COMPUTER" },
            { en: "cloud computing", cn: "雲端運算", category: "IT_COMPUTER" },
            { en: "compiler", cn: "編譯器", category: "IT_COMPUTER" },
            { en: "deep learning", cn: "深度學習", category: "IT_COMPUTER" },
            { en: "firewall", cn: "防火牆", category: "IT_COMPUTER" },
            { en: "open source", cn: "開放原始碼", category: "IT_COMPUTER" },
            { en: "operating system", cn: "作業系統", category: "IT_COMPUTER" },
            { en: "microservice", cn: "微服務", category: "IT_COMPUTER" },
            { en: "router", cn: "路由器", category: "IT_COMPUTER" },
            { en: "serverless", cn: "無伺服器架構", category: "IT_COMPUTER" },

            // Business & Management (商管)
            { en: "asset allocation", cn: "資產配置", category: "BUSINESS" },
            { en: "benchmarking", cn: "標竿學習", category: "BUSINESS" },
            { en: "brainstorming", cn: "腦力激盪", category: "BUSINESS" },
            { en: "business model", cn: "商業模式", category: "BUSINESS" },
            { en: "core competency", cn: "核心競爭力", category: "BUSINESS" },
            { en: "corporate governance", cn: "公司治理", category: "BUSINESS" },
            { en: "entrepreneurship", cn: "創業家精神", category: "BUSINESS" },
            { en: "key performance indicator", cn: "關鍵績效指標 (KPI)", category: "BUSINESS" },
            { en: "market penetration", cn: "市場滲透率", category: "BUSINESS" },
            { en: "return on investment", cn: "投資報酬率 (ROI)", category: "BUSINESS" },

            // Hospitality & Catering (餐旅觀光)
            { en: "à la carte", cn: "單點選單", category: "HOSPITALITY" },
            { en: "amenities", cn: "客房便利備品", category: "HOSPITALITY" },
            { en: "buffet", cn: "自助餐", category: "HOSPITALITY" },
            { en: "concierge", cn: "禮賓接待員", category: "HOSPITALITY" },
            { en: "housekeeping", cn: "客房清潔房務", category: "HOSPITALITY" },
            { en: "itinerary", cn: "旅遊行程表", category: "HOSPITALITY" },
            { en: "reservation", cn: "預訂；預約", category: "HOSPITALITY" },
            { en: "valet parking", cn: "代客停車", category: "HOSPITALITY" },

            // Medical & Health (醫護健康)
            { en: "cardiovascular", cn: "心血管的", category: "MEDICAL" },
            { en: "diagnosis", cn: "診斷", category: "MEDICAL" },
            { en: "epidemic", cn: "傳染病；流行病", category: "MEDICAL" },
            { en: "intensive care unit", cn: "加護病房 (ICU)", category: "MEDICAL" },
            { en: "pathology", cn: "病理學", category: "MEDICAL" },
            { en: "prescription", cn: "處方箋", category: "MEDICAL" },
            { en: "symptom", cn: "症狀", category: "MEDICAL" },
            { en: "vaccination", cn: "疫苗接種", category: "MEDICAL" },

            // Finance & Accounting (金融會計)
            { en: "amortization", cn: "攤銷", category: "FINANCE" },
            { en: "balance sheet", cn: "資產負債表", category: "FINANCE" },
            { en: "capital gain", cn: "資本利得", category: "FINANCE" },
            { en: "dividend", cn: "股利；分紅", category: "FINANCE" },
            { en: "equity", cn: "股權；淨值", category: "FINANCE" },
            { en: "liquidity", cn: "流動性", category: "FINANCE" },
            { en: "portfolio", cn: "投資組合", category: "FINANCE" },
            { en: "yield", cn: "收益率", category: "FINANCE" },
            // Digital Multimedia Design
            { en: "animation", cn: "動畫", category: "DIGITAL_MULTIMEDIA" },
            { en: "augmented reality", cn: "擴增實境", category: "DIGITAL_MULTIMEDIA" },
            { en: "character design", cn: "角色設計", category: "DIGITAL_MULTIMEDIA" },
            { en: "composition", cn: "構圖；合成", category: "DIGITAL_MULTIMEDIA" },
            { en: "digital asset", cn: "數位素材", category: "DIGITAL_MULTIMEDIA" },
            { en: "frame rate", cn: "影格率", category: "DIGITAL_MULTIMEDIA" },
            { en: "game engine", cn: "遊戲引擎", category: "DIGITAL_MULTIMEDIA" },
            { en: "keyframe", cn: "關鍵影格", category: "DIGITAL_MULTIMEDIA" },
            { en: "lighting", cn: "燈光；照明", category: "DIGITAL_MULTIMEDIA" },
            { en: "motion capture", cn: "動作捕捉", category: "DIGITAL_MULTIMEDIA" },
            { en: "rendering", cn: "算圖；渲染", category: "DIGITAL_MULTIMEDIA" },
            { en: "storyboard", cn: "分鏡腳本", category: "DIGITAL_MULTIMEDIA" },
            { en: "texture mapping", cn: "材質貼圖", category: "DIGITAL_MULTIMEDIA" },
            { en: "user interface", cn: "使用者介面", category: "DIGITAL_MULTIMEDIA" },
            { en: "virtual reality", cn: "虛擬實境", category: "DIGITAL_MULTIMEDIA" },
            { en: "visual effects", cn: "視覺特效", category: "DIGITAL_MULTIMEDIA" },
            { en: "voice-over", cn: "旁白；配音", category: "DIGITAL_MULTIMEDIA" },
            { en: "workflow", cn: "工作流程", category: "DIGITAL_MULTIMEDIA" }
        ];

        // Global Application State
        let customWordsList = [];
        let currentQuestionList = [];
        let currentQuestionIndex = 0;
        let examScore = 0;
        let userAnswers = []; // Store answer details
        let examTimerInterval = null;
        let secondsElapsed = 0;
        let activeTestType = 1; // Default Test 1
        let activeExamMode = 'EXAM'; // 'EXAM' or 'PRACTICE'
        let audioEnabled = true;
        let speechRequestId = 0;
        let speechStartTimer = null;
        let autoPlayTimer = null;
        let currentUtterance = null;
        let currentAudioPlayer = null;

        // Initialize on DOM load
        window.onload = function() {
            loadSavedCustomWords();
            updateCategoryBadge();
            renderVocabularyTable();
            bindGlobalKeybindings();
        };

        // Audio Setting Switch
        function toggleAudioSetting() {
            audioEnabled = !audioEnabled;
            const icon = document.getElementById('audio-icon');
            if (audioEnabled) {
                icon.className = 'fa-solid fa-volume-high text-lg';
            } else {
                icon.className = 'fa-solid fa-volume-xmark text-lg text-red-300';
            }
        }

        // View Navigation Switcher
        function switchView(viewId) {
            const views = ['view-home', 'view-exam', 'view-result', 'view-words', 'view-history'];
            views.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
            const target = document.getElementById(viewId);
            if (target) target.classList.remove('hidden');

            if (viewId === 'view-words') {
                renderVocabularyTable();
            } else if (viewId === 'view-history') {
                renderHistoryView();
            }
        }

        // Category Selection Update
        function onCategoryChange() {
            updateCategoryBadge();
        }

        function getActiveVocabularyPool() {
            const cat = document.getElementById('select-category').value;
            let pool = [];

            if (cat === 'CUSTOM') {
                pool = [...customWordsList];
            } else if (cat === 'EXPERT_ALL') {
                pool = [...BUILTIN_VOCABULARY];
            } else {
                pool = BUILTIN_VOCABULARY.filter(w => w.category === cat || w.category === 'EXPERT_ALL');
            }

            if (pool.length === 0) {
                pool = [...BUILTIN_VOCABULARY]; // Fallback if custom empty
            }
            return pool;
        }

        function updateCategoryBadge() {
            const pool = getActiveVocabularyPool();
            document.getElementById('word-count-badge').innerText = `可用題庫單字量: ${pool.length} 字`;
        }

        /* TEST GENERATION ENGINE (Tests 1 to 6) */
        function startSingleTest(testNum) {
            activeTestType = testNum;
            setupAndLaunchExam();
        }

        function startFullMockExam() {
            activeTestType = 'MOCK'; // Randomly mix tests 1 to 6
            setupAndLaunchExam();
        }

        function setupAndLaunchExam() {
            const pool = getActiveVocabularyPool();
            if (pool.length < 4) {
                alert('當前類別字彙量少於4字，無法生成多選題選項。請先新增或匯入更多單字！');
                return;
            }

            const countSelect = parseInt(document.getElementById('select-count').value);
            activeExamMode = document.getElementById('select-mode').value;

            // Pick random words from pool
            const shuffledPool = shuffleArray([...pool]);
            const selectedWords = shuffledPool.slice(0, Math.min(countSelect, shuffledPool.length));

            // Generate questions list
            currentQuestionList = selectedWords.map((wordItem, idx) => {
                let testType = activeTestType;
                if (activeTestType === 'MOCK') {
                    // Random test between 1 and 6
                    testType = Math.floor(Math.random() * 6) + 1;
                }

                // Generate answer choices for Tests 2 to 6
                let options = [];
                if (testType !== 1) {
                    options = generateOptions(wordItem, pool, testType);
                }

                return {
                    id: idx + 1,
                    testType: testType,
                    word: wordItem.en,
                    chinese: wordItem.cn,
                    options: options, // Array of strings or object
                    correctAnswer: getCorrectAnswerText(wordItem, testType)
                };
            });

            // Reset Exam State
            currentQuestionIndex = 0;
            examScore = 0;
            userAnswers = [];
            secondsElapsed = 0;

            // Start Timer
            if (examTimerInterval) clearInterval(examTimerInterval);
            examTimerInterval = setInterval(() => {
                secondsElapsed++;
                const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
                const secs = String(secondsElapsed % 60).padStart(2, '0');
                document.getElementById('exam-timer').innerText = `${mins}:${secs}`;
            }, 1000);

            // Switch UI & Render Question
            switchView('view-exam');
            renderCurrentQuestion();
        }

        function getCorrectAnswerText(item, testType) {
            if (testType === 2 || testType === 3) {
                return item.cn; // Correct Chinese
            } else {
                return item.en; // Correct English
            }
        }

        function generateOptions(targetItem, fullPool, testType) {
            const isChineseOption = (testType === 2 || testType === 3);
            const targetVal = isChineseOption ? targetItem.cn : targetItem.en;

            // Distractors
            const otherItems = fullPool.filter(w => (isChineseOption ? w.cn : w.en) !== targetVal);
            const shuffledOthers = shuffleArray([...otherItems]);
            const selectedDistractors = shuffledOthers.slice(0, 3).map(w => isChineseOption ? w.cn : w.en);

            const allOpts = [targetVal, ...selectedDistractors];
            return shuffleArray(allOpts);
        }

        /* RENDER LIVE QUESTION */
        function renderCurrentQuestion() {
            stopCurrentAudio();
            const q = currentQuestionList[currentQuestionIndex];
            const totalQ = currentQuestionList.length;

            // Update Progress HUD
            document.getElementById('exam-progress-text').innerText = `${currentQuestionIndex + 1} / ${totalQ}`;
            document.getElementById('exam-progress-bar').style.width = `${((currentQuestionIndex + 1) / totalQ) * 100}%`;
            document.getElementById('q-index-number').innerText = currentQuestionIndex + 1;

            // Mode Label
            document.getElementById('exam-mode-badge').innerText = activeExamMode === 'EXAM' ? '正式測驗' : '自主練習';

            // Test Badge & Title Config
            const badgeEl = document.getElementById('exam-badge');
            const qTypeLabel = document.getElementById('q-type-label');
            const audioBox = document.getElementById('audio-question-box');
            const textBox = document.getElementById('text-question-box');
            const optionsGrid = document.getElementById('options-grid');
            const spellingArea = document.getElementById('spelling-input-area');
            const practiceFeedback = document.getElementById('practice-feedback');

            practiceFeedback.classList.add('hidden');

            // Configure six PVQC question formats
            switch (q.testType) {
                case 1:
                    badgeEl.innerText = "測驗一：看中文，拼寫英文"; badgeEl.className = "bg-slate-100 text-slate-800 text-xs font-extrabold px-3 py-1 rounded-lg";
                    qTypeLabel.innerText = "中譯英拼寫"; audioBox.classList.add('hidden'); textBox.classList.remove('hidden');
                    document.getElementById('q-title-text').innerText = q.chinese; document.getElementById('q-sub-hint').innerText = `請拼寫英文單字（${q.word.length} 個字母）`;
                    optionsGrid.classList.add('hidden'); spellingArea.classList.remove('hidden'); document.getElementById('input-spelling').value = ''; setTimeout(() => document.getElementById('input-spelling').focus(), 100); break;
                case 2:
                    badgeEl.innerText = "測驗二：看英文，選中文"; badgeEl.className = "bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-lg";
                    qTypeLabel.innerText = "閱讀英譯中"; audioBox.classList.add('hidden'); textBox.classList.remove('hidden');
                    document.getElementById('q-title-text').innerText = q.word; document.getElementById('q-sub-hint').innerText = "請選出對應的中文含意";
                    optionsGrid.classList.remove('hidden'); spellingArea.classList.add('hidden'); break;
                case 3: case 4:
                    badgeEl.innerText = q.testType === 3 ? "測驗三：聽英文發音，選中文" : "測驗四：聽英文發音，選英文";
                    badgeEl.className = q.testType === 3 ? "bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-lg" : "bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-lg";
                    qTypeLabel.innerText = q.testType === 3 ? "聽音選中文" : "聽音選英文";
                    audioBox.classList.remove('hidden'); textBox.classList.add('hidden'); optionsGrid.classList.remove('hidden'); spellingArea.classList.add('hidden'); break;
                case 5: case 6:
                    badgeEl.innerText = q.testType === 5 ? "測驗五：看中文，聽選英文發音" : "測驗六：看英文，聽選英文發音"; badgeEl.className = "bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-lg";
                    qTypeLabel.innerText = "閱讀提示與英文聽辨"; audioBox.classList.add('hidden'); textBox.classList.remove('hidden'); document.getElementById('q-title-text').innerText = q.testType === 5 ? q.chinese : q.word; document.getElementById('q-sub-hint').innerText = "請聽選項發音，選出正確英文"; optionsGrid.classList.remove('hidden'); spellingArea.classList.add('hidden'); break;
            }

            // Render Options for Multiple Choice
            if (q.testType !== 1) {
                optionsGrid.innerHTML = '';
                q.options.forEach((optText, index) => {
                    const btn = document.createElement('button');
                    btn.className = "w-full p-4 text-left border-2 border-slate-200 hover:border-pvqc-500 rounded-xl hover:bg-pvqc-50 transition flex items-center justify-between group active:scale-[0.99]";
                    btn.onclick = () => selectOptionAnswer(optText, btn);
                    
                    btn.innerHTML = `
                        <div class="flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 font-extrabold text-xs flex items-center justify-center group-hover:bg-pvqc-600 group-hover:text-white transition">
                                ${index + 1}
                            </span>
                            <span class="font-bold text-slate-700 text-sm sm:text-base group-hover:text-pvqc-900">${optText}</span>
                            ${(q.testType === 5 || q.testType === 6) ? `<span class="option-audio ml-2 text-pvqc-600" title="播放發音"><i class="fa-solid fa-volume-high"></i></span>` : ""}
                        </div>
                        <i class="fa-regular fa-circle text-slate-300 group-hover:text-pvqc-500"></i>
                    `;
                    const audioControl = btn.querySelector(".option-audio");
                    if (audioControl) audioControl.addEventListener("click", (event) => { event.stopPropagation(); speakWord(optText); });
                    optionsGrid.appendChild(btn);
                });
            }

            // Keep only one autoplay timer while changing questions.
            clearTimeout(autoPlayTimer);
            if ((q.testType === 3 || q.testType === 4) && audioEnabled) {
                autoPlayTimer = setTimeout(() => playCurrentQuestionAudio(), 450);
            }
        }

        // Stop the previous MP3 before starting another pronunciation.
        function stopCurrentAudio() {
            if (currentAudioPlayer) {
                currentAudioPlayer.pause();
                currentAudioPlayer.currentTime = 0;
                currentAudioPlayer = null;
            }
        }

        // Browser speech synthesis remains as a fallback for words without a packaged MP3.
        function speakEnglish(text) {
            stopCurrentAudio();
            if (!('speechSynthesis' in window) || !text) return;

            const synth = window.speechSynthesis;
            const requestId = ++speechRequestId;
            clearTimeout(speechStartTimer);
            synth.cancel();

            speechStartTimer = setTimeout(() => {
                if (requestId !== speechRequestId) return;
                if (synth.paused) synth.resume();

                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;
                utterance.volume = 1;
                const voices = synth.getVoices();
                const englishVoice = voices.find(voice => /^en-US$/i.test(voice.lang))
                    || voices.find(voice => /^en/i.test(voice.lang));
                if (englishVoice) utterance.voice = englishVoice;

                currentUtterance = utterance;
                utterance.onend = () => {
                    if (currentUtterance === utterance) currentUtterance = null;
                };
                utterance.onerror = () => {
                    if (currentUtterance === utterance) currentUtterance = null;
                };
                synth.speak(utterance);
            }, 150);
        }

        // Play the packaged MP3 for known vocabulary, with speech synthesis as fallback.
        function playPronunciation(text) {
            if (!text) return;
            const key = String(text).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
            const fileName = window.PVQC_AUDIO_FILES && window.PVQC_AUDIO_FILES[key];
            if (!fileName) {
                speakEnglish(text);
                return;
            }

            stopCurrentAudio();
            const player = new Audio('PVQC_Expert_MP3/' + encodeURIComponent(fileName));
            currentAudioPlayer = player;
            let fallbackStarted = false;
            const useSpeechFallback = () => {
                if (fallbackStarted) return;
                fallbackStarted = true;
                if (currentAudioPlayer === player) currentAudioPlayer = null;
                speakEnglish(text);
            };
            player.onerror = useSpeechFallback;
            const playPromise = player.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(useSpeechFallback);
            }
        }

        function playCurrentQuestionAudio() {
            clearTimeout(autoPlayTimer);
            const q = currentQuestionList[currentQuestionIndex];
            if (q) playPronunciation(q.word);
        }

        function speakWord(wordText) {
            playPronunciation(wordText);
        }

        /* ANSWER EVALUATION LOGIC */
        function selectOptionAnswer(selectedText, btnEl) {
            const q = currentQuestionList[currentQuestionIndex];
            const isCorrect = (selectedText.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase());

            recordAnswerAndProceed(selectedText, isCorrect, btnEl);
        }

        function submitSpellingAnswer() {
            const q = currentQuestionList[currentQuestionIndex];
            const inputVal = document.getElementById('input-spelling').value.trim();
            if (!inputVal) return;

            const isCorrect = (inputVal.toLowerCase() === q.word.toLowerCase());
            recordAnswerAndProceed(inputVal, isCorrect);
        }

        function skipQuestion() {
            recordAnswerAndProceed("(未答/跳過)", false);
        }

        function recordAnswerAndProceed(userAns, isCorrect, btnEl = null) {
            const q = currentQuestionList[currentQuestionIndex];

            // Store detailed record
            userAnswers.push({
                questionNumber: currentQuestionIndex + 1,
                testType: q.testType,
                word: q.word,
                chinese: q.chinese,
                userAnswer: userAns,
                correctAnswer: q.correctAnswer,
                isCorrect: isCorrect
            });

            if (isCorrect) {
                examScore += (100 / currentQuestionList.length);
            }

            // PRACTICE MODE: Show instant feedback
            if (activeExamMode === 'PRACTICE') {
                const feedbackBox = document.getElementById('practice-feedback');
                const feedbackIcon = document.getElementById('feedback-icon');
                const feedbackTitle = document.getElementById('feedback-title');
                const feedbackDetail = document.getElementById('feedback-detail');

                feedbackBox.classList.remove('hidden');

                if (isCorrect) {
                    feedbackBox.className = "p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 flex items-center justify-between";
                    feedbackIcon.className = "fa-solid fa-circle-check text-emerald-600 text-2xl";
                    feedbackTitle.innerText = "答對了！恭喜回答正確！";
                    feedbackDetail.innerText = `${q.word} = ${q.chinese}`;
                } else {
                    feedbackBox.className = "p-4 rounded-xl border border-red-200 bg-red-50 text-red-800 flex items-center justify-between";
                    feedbackIcon.className = "fa-solid fa-circle-xmark text-red-600 text-2xl";
                    feedbackTitle.innerText = "答錯囉！";
                    feedbackDetail.innerText = `正確答案為：${q.correctAnswer} (${q.word} - ${q.chinese})`;
                }

                // Play pronunciation on answer feedback
                speakWord(q.word);
            } else {
                // EXAM MODE: Immediate step to next
                nextQuestion();
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestionList.length) {
                renderCurrentQuestion();
            } else {
                finishExam();
            }
        }

        /* FINISH EXAM & RENDER RESULTS */
        function finishExam() {
            if (examTimerInterval) clearInterval(examTimerInterval);

            const finalScoreRound = Math.round(examScore);
            const totalQ = currentQuestionList.length;
            const correctCount = userAnswers.filter(a => a.isCorrect).length;
            const accuracyPercent = Math.round((correctCount / totalQ) * 100);

            // Update UI Score Elements
            document.getElementById('res-score').innerText = finalScoreRound;
            document.getElementById('res-accuracy').innerText = `${accuracyPercent}%`;
            document.getElementById('res-counts-text').innerText = `${correctCount} / ${totalQ} 題`;

            // Time spend
            const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
            const secs = String(secondsElapsed % 60).padStart(2, '0');
            document.getElementById('res-time').innerText = `${mins}:${secs}`;
            document.getElementById('res-avg-time').innerText = `${(secondsElapsed / totalQ).toFixed(1)}s`;

            // Pass/Fail Grade (Standard PVQC pass is 70 points)
            const stamp = document.getElementById('result-stamp');
            const gradeText = document.getElementById('res-grade');
            if (finalScoreRound >= 70) {
                stamp.innerText = "PASSED";
                stamp.className = "absolute -right-6 -top-6 w-32 h-32 rounded-full border-4 border-emerald-500 text-emerald-600 flex items-center justify-center font-black text-xl rotate-12 opacity-80 pointer-events-none bg-emerald-50/50";
                gradeText.innerText = "檢定合格";
                gradeText.className = "text-xl sm:text-2xl font-black text-emerald-600 block mt-1";
            } else {
                stamp.innerText = "FAILED";
                stamp.className = "absolute -right-6 -top-6 w-32 h-32 rounded-full border-4 border-red-400 text-red-500 flex items-center justify-center font-black text-xl rotate-12 opacity-80 pointer-events-none bg-red-50/50";
                gradeText.innerText = "未達標準";
                gradeText.className = "text-xl sm:text-2xl font-black text-red-500 block mt-1";
            }

            // Wrong answers count tag
            const wrongCount = totalQ - correctCount;
            document.getElementById('wrong-count-tag').innerText = wrongCount;
            const retestBtn = document.getElementById('btn-retest-wrong');
            if (wrongCount === 0) {
                retestBtn.disabled = true;
                retestBtn.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                retestBtn.disabled = false;
                retestBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            }

            // Render Detailed Review Rows
            renderReviewList('ALL');

            // Save to Local History
            saveExamToHistory({
                date: new Date().toLocaleString('zh-TW'),
                score: finalScoreRound,
                accuracy: accuracyPercent,
                timeSpent: `${mins}:${secs}`,
                questionCount: totalQ,
                testType: activeTestType
            });

            switchView('view-result');
        }

        function renderReviewList(filter) {
            const container = document.getElementById('review-list-container');
            container.innerHTML = '';

            userAnswers.forEach((ans, i) => {
                if (filter === 'WRONG' && ans.isCorrect) return;

                const row = document.createElement('div');
                row.className = `p-4 rounded-xl border ${ans.isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-red-50/50 border-red-200'} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3`;

                row.innerHTML = `
                    <div class="flex items-start sm:items-center gap-3">
                        <span class="w-6 h-6 rounded-full ${ans.isCorrect ? 'bg-emerald-500' : 'bg-red-500'} text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                            ${ans.questionNumber}
                        </span>
                        <div>
                            <div class="flex items-center gap-2">
                                <h4 class="font-extrabold text-slate-800 text-base">${ans.word}</h4>
                                <button onclick="speakWord('${ans.word}')" class="text-pvqc-600 hover:text-pvqc-800 text-sm">
                                    <i class="fa-solid fa-volume-high"></i>
                                </button>
                                <span class="text-xs text-slate-400 bg-white border px-1.5 py-0.5 rounded">測驗${ans.testType}</span>
                            </div>
                            <p class="text-xs text-slate-600 font-medium">中文對譯: ${ans.chinese}</p>
                        </div>
                    </div>

                    <div class="text-xs text-right space-y-0.5 w-full sm:w-auto">
                        <p class="${ans.isCorrect ? 'text-emerald-700 font-bold' : 'text-red-600 font-bold'}">
                            您的回答: ${ans.userAnswer}
                        </p>
                        ${!ans.isCorrect ? `<p class="text-slate-500">正確答案: <strong class="text-slate-800">${ans.correctAnswer}</strong></p>` : ''}
                    </div>
                `;
                container.appendChild(row);
            });
        }

        function filterReviewList(mode) {
            renderReviewList(mode);
        }

        /* RETEST WRONG WORDS FUNCTIONALITY */
        function retestWrongWords() {
            const wrongAnswers = userAnswers.filter(a => !a.isCorrect);
            if (wrongAnswers.length === 0) return;

            const pool = getActiveVocabularyPool();

            currentQuestionList = wrongAnswers.map((item, idx) => {
                const wordObj = { en: item.word, cn: item.chinese };
                return {
                    id: idx + 1,
                    testType: item.testType,
                    word: item.word,
                    chinese: item.chinese,
                    options: generateOptions(wordObj, pool, item.testType),
                    correctAnswer: item.correctAnswer
                };
            });

            currentQuestionIndex = 0;
            examScore = 0;
            userAnswers = [];
            secondsElapsed = 0;

            switchView('view-exam');
            renderCurrentQuestion();
        }

        function confirmAbortExam() {
            if (confirm('確定要離開本次測驗嗎？目前的作答進度將不會保存。')) {
                if (examTimerInterval) clearInterval(examTimerInterval);
                switchView('view-home');
            }
        }

        /* VOCABULARY TABLE & CSV IMPORTER ENGINE */
        function renderVocabularyTable() {
            const pool = getActiveVocabularyPool();
            const searchVal = document.getElementById('word-search-input').value.toLowerCase();
            const catFilter = document.getElementById('word-category-filter').value;
            const tbody = document.getElementById('word-table-body');
            tbody.innerHTML = '';

            const filtered = pool.filter(item => {
                const matchesSearch = item.en.toLowerCase().includes(searchVal) || item.cn.includes(searchVal);
                const matchesCat = (catFilter === 'ALL' || item.category === catFilter);
                return matchesSearch && matchesCat;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">查無相符的單字資料</td></tr>`;
                return;
            }

            filtered.forEach((item, index) => {
                const tr = document.createElement('tr');
                tr.className = "hover:bg-slate-50 transition";
                tr.innerHTML = `
                    <td class="py-3 px-4 text-xs font-mono text-slate-400">${index + 1}</td>
                    <td class="py-3 px-4 font-bold text-slate-800">${item.en}</td>
                    <td class="py-3 px-4 text-slate-600">${item.cn}</td>
                    <td class="py-3 px-4"><span class="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded">${item.category}</span></td>
                    <td class="py-3 px-4 text-center">
                        <button onclick="speakWord('${item.en}')" class="p-2 text-pvqc-600 hover:text-pvqc-800 transition">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        function openCsvImportModal() {
            document.getElementById('modal-csv-import').classList.remove('hidden');
        }

        function closeCsvImportModal() {
            document.getElementById('modal-csv-import').classList.add('hidden');
        }

        async function processCustomCsvImport() {
            const fileInput = document.getElementById('csv-file-input');
            const file = fileInput.files[0];
            if (!file) { alert('請先選擇 CSV 檔案！'); return; }

            let rows;
            try {
                const text = (await file.text()).replace(/^\uFEFF/, '');
                rows = parseCsvRows(text);
            } catch (error) {
                alert('讀取 CSV 檔案失敗，請確認檔案格式與編碼。');
                return;
            }

            let addedCount = 0;
            rows.forEach((row, index) => {
                if (row.length < 2) return;
                const enStr = row[0].trim();
                const cnStr = row[1].trim();
                if (!enStr || !cnStr) return;
                if (index === 0 && /^(english|英文|word|單字)$/i.test(enStr)) return;
                customWordsList.push({ en: enStr, cn: cnStr, category: 'CUSTOM' });
                addedCount++;
            });

            if (addedCount === 0) { alert('未能解析有效字彙。請確認 CSV 每列前兩欄依序為英文與中文。'); return; }
            saveCustomWordsLocally();
            alert(`成功匯入 ${addedCount} 個自訂 PVQC 單字！`);
            fileInput.value = '';
            document.getElementById('csv-file-name').innerText = '尚未選擇檔案';
            closeCsvImportModal();
            document.getElementById('select-category').value = 'CUSTOM';
            updateCategoryBadge();
            renderVocabularyTable();
        }

        // 解析 CSV 引號與欄位中的逗號，支援標準雙引號跳脫格式。
        function parseCsvRows(text) {
            const rows = [];
            let row = [];
            let field = '';
            let inQuotes = false;
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (char === '"') {
                    if (inQuotes && text[i + 1] === '"') { field += '"'; i++; }
                    else inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    row.push(field); field = '';
                } else if ((char === '\n' || char === '\r') && !inQuotes) {
                    if (char === '\r' && text[i + 1] === '\n') i++;
                    row.push(field);
                    if (row.some(value => value.trim())) rows.push(row);
                    row = []; field = '';
                } else field += char;
            }
            row.push(field);
            if (row.some(value => value.trim())) rows.push(row);
            return rows;
        }

        function saveCustomWordsLocally() {
            localStorage.setItem('pvqc_custom_words', JSON.stringify(customWordsList));
        }

        function loadSavedCustomWords() {
            const saved = localStorage.getItem('pvqc_custom_words');
            if (saved) {
                try {
                    customWordsList = JSON.parse(saved);
                } catch(e) {
                    customWordsList = [];
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const fileInput = document.getElementById('csv-file-input');
            if (!fileInput) return;
            fileInput.addEventListener('change', () => {
                const file = fileInput.files[0];
                document.getElementById('csv-file-name').innerText = file ? file.name : '尚未選擇檔案';
            });
        });

        /* EXAM HISTORY STORAGE */
        function saveExamToHistory(record) {
            let history = [];
            const saved = localStorage.getItem('pvqc_exam_history');
            if (saved) {
                try { history = JSON.parse(saved); } catch(e) { history = []; }
            }
            history.unshift(record);
            localStorage.setItem('pvqc_exam_history', JSON.stringify(history));
        }

        function renderHistoryView() {
            const container = document.getElementById('history-list-container');
            container.innerHTML = '';

            const saved = localStorage.getItem('pvqc_exam_history');
            let history = [];
            if (saved) {
                try { history = JSON.parse(saved); } catch(e) { history = []; }
            }

            if (history.length === 0) {
                container.innerHTML = `<div class="text-center py-12 text-slate-400 text-sm">尚無任何測驗歷史紀錄。快去進行一次測驗吧！</div>`;
                return;
            }

            history.forEach(item => {
                const card = document.createElement('div');
                card.className = "bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3";
                card.innerHTML = `
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-extrabold text-slate-800 text-lg">${item.score} 分</span>
                            <span class="text-xs px-2 py-0.5 rounded font-bold ${item.score >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">
                                ${item.score >= 70 ? '檢定合格' : '未達標準'}
                            </span>
                        </div>
                        <p class="text-xs text-slate-500 mt-1">
                            時間: ${item.date} | 題數: ${item.questionCount} 題 | 耗時: ${item.timeSpent}
                        </p>
                    </div>
                    <div class="text-xs text-right">
                        <span class="text-slate-600 font-bold">正確率: ${item.accuracy}%</span>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function clearHistoryRecords() {
            if (confirm('確定要清除所有歷史成績紀錄嗎？')) {
                localStorage.removeItem('pvqc_exam_history');
                renderHistoryView();
            }
        }

        /* GLOBAL UTILITIES & KEYBOARD SHORTCUTS */
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function bindGlobalKeybindings() {
            document.addEventListener('keydown', (e) => {
                const examView = document.getElementById('view-exam');
                if (examView.classList.contains('hidden')) return;

                const q = currentQuestionList[currentQuestionIndex];
                if (!q) return;

                // Key 1 - 4 for options
                if (q.testType !== 1) {
                    if (['1', '2', '3', '4'].includes(e.key)) {
                        const optIndex = parseInt(e.key) - 1;
                        const btns = document.querySelectorAll('#options-grid button');
                        if (btns[optIndex]) {
                            btns[optIndex].click();
                        }
                    }
                } else {
                    if (e.key === 'Enter') {
                        submitSpellingAnswer();
                    }
                }

                // Space key for playing audio
                if (e.code === 'Space' && (q.testType === 3 || q.testType === 4)) {
                    e.preventDefault();
                    playCurrentQuestionAudio();
                }
            });
        }



