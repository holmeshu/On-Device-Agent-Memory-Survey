# Benchmark Resource Availability

[Back to the resource page](../README.md) · [Evaluation and benchmark comparison](evaluation.md)

**Checked on:** 2026-10-03. **Scope:** 32 benchmark entries in Table 7-1 of the consolidated survey.

The checks use author-provided repositories, dataset cards/file listings, and release statements in the papers. Public repository access, code release, and dataset release are assessed separately. A paper being public does not establish that its benchmark artifacts are public.

“Not located” is a search outcome. “Planned” or “pending” requires an explicit statement from the authors. Access failures and anonymous links are kept as unconfirmed. They are not treated as proof of non-release. Bulk downloads, benchmark execution, and completeness checks of every file were not performed.

## Release Status at a Glance

| Benchmark | Availability | Code | Data | Resources |
| --- | --- | --- | --- | --- |
| LoCoMo | Partial multimodal release | Public | Public text/QA (image files excluded) | [Repository](https://github.com/snap-research/locomo) |
| LongMemEval | Code + data | Public | Public | [Repository](https://github.com/xiaowu0162/LongMemEval) · [Data](https://huggingface.co/datasets/xiaowu0162/longmemeval-cleaned) |
| MemBench | Code + data | Public | Public release links | [Repository](https://github.com/import-myself/Membench) |
| MemoryAgentBench | Code + data | Public | Public | [Repository](https://github.com/HUST-AI-HYZ/MemoryAgentBench) · [Data](https://huggingface.co/datasets/ai-hyz/MemoryAgentBench) |
| MemoryBench | Code + data | Public | Public | [Repository](https://github.com/THUIR/MemoryBench) · [Data](https://huggingface.co/datasets/THUIR/MemoryBench) |
| WorldMemArena | Code + data | Public | Public release link | [Repository](https://github.com/UCSB-AI/WorldMemArena) · [Data](https://huggingface.co/datasets/LCZZZZ/WorldMemArena) |
| Mem2ActBench | Code + data | Public | Public repository files | [Repository](https://github.com/Cantaloupe-M/Mem2ActBench) |
| MemoryArena | Public preview framework | Public preview | Task/environment setup supplied | [Repository](https://github.com/ZexueHe/MemoryArena) |
| Memora | Code + data | Public | Public repository files | [Repository](https://github.com/geniesinc/Memora) |
| PM-Bench | Code + data | Public | Public repository files | [Repository](https://github.com/genglinliu/PMBench) |
| LongMemEval-V2 | Code + data | Public | Public release link | [Repository](https://github.com/xiaowu0162/LongMemEval-V2) · [Data](https://huggingface.co/datasets/xiaowu0162/longmemeval-v2) |
| AMA-Bench | Code + data | Public | Public release link | [Repository](https://github.com/AMA-Bench/AMA-Bench) · [Data](https://huggingface.co/datasets/AMA-bench/AMA-bench) |
| PA-Bench | Resources not found | Not located | Not located | — |
| BudgetBench | Public pilot harness | Public | Synthetic pilot + external adapters | [Repository](https://github.com/aviskaar/budgetbench) |
| MobileMem | Code + data | Public | Public | [Repository](https://github.com/zjunlp/MobileMem) · [Data](https://huggingface.co/datasets/zjunlp/MobileMem) |
| MobileMem-Omni | Code + data | Public | Public | [Repository](https://github.com/zjunlp/MobileMem) · [Data](https://huggingface.co/datasets/zjunlp/MobileMem) |
| MEMARENA | Anonymous data (attribution unconfirmed) | Indexed anonymous repo returns 404 | Public MemArena-L candidate | [Anonymous data](https://huggingface.co/datasets/zthsecondantigravity/memarena-l) |
| Memory-QA | Partial data release | Public validation script | Partial (test-s withheld) | [Repository](https://github.com/facebookresearch/MemoryQA) |
| S-EMBER | Code + gated data | Public | Released with access conditions | [Repository](https://github.com/facebookresearch/S-EMBER) · [Data](https://huggingface.co/datasets/facebook/S-EMBER) |
| LifeDialBench | Data released, evaluation code pending | Not yet released per README | Public EgoMem/LifeMem JSON | [Repository](https://github.com/RayNeo-AI-2025/LifeDialBench) |
| MemGUI-Bench | Code + data | Public | Public tasks + runtime | [Repository](https://github.com/lgy0404/MemGUI-Bench) · [Tasks](https://huggingface.co/datasets/lgy0404/MemGUI-Bench) |
| AndroidWorld-M | Resources not found | Not located for this variant | Task definitions in paper, no artifact located | — |
| Memory-World | Resources not found | Not located | Not located | — |
| DataScope | Release planned, data unconfirmed | Planned in paper | Not located | — |
| AndroidIntent | Code + derived data | Public | Public derived files with upstream dependencies | [Repository](https://github.com/iLearn-Lab/ACL26-PersonalAlign) |
| MobileIAR | Code + data | Public | Public | [Repository](https://github.com/MadeAgents/Quick-on-the-Uptake) · [Data](https://huggingface.co/datasets/wuuuuuz/MobileIAR) |
| PSPA-Bench | Anonymous link (contents unconfirmed) | Claimed in paper (unverified) | Claimed in paper (unverified) | [Author link](https://anonymous.4open.science/status/PSPA-Bench) |
| DesktopBench | Code + derived data | Public FOCAL reproduction code | Public derived data requiring screenshot reconstruction | [Dataset](https://huggingface.co/datasets/HaoranYin/desktopbench) · [Code](https://github.com/Haoran2099/focal) |
| HME-QA | Annotations released, pipeline pending | Public download script, training/evaluation pending | Public annotations with upstream Ego4D videos | [Repository](https://github.com/yahskapar/EgoTrigger) |
| EgoLifeQA | Code + data resources | Public EgoRAG/EgoGPT | Public project data resources | [Repository](https://github.com/EvolvingLMMs-Lab/EgoLife) · [Data collection](https://huggingface.co/collections/lmms-lab/egolife) |
| M3-Bench | Code + data resources | Public | Public annotations + robot data + web source URLs | [Repository](https://github.com/bytedance-seed/m3-agent) |
| MEMENTO | Code + task data | Public | Public task files with upstream simulator assets | [Repository](https://github.com/Connoriginal/MEMENTO) |

## Evidence and Release Limitations

### LoCoMo

**Partial multimodal release.** The repository includes locomo10.json and evaluation code. Image URLs/captions are supplied, but the images themselves are not released. Some additional task scripts remain marked coming soon.

[Paper](https://doi.org/10.18653/v1/2024.acl-long.747) · [Source 1](https://github.com/snap-research/locomo)

### LongMemEval

**Code + data.** Official repository links the cleaned Hugging Face data and includes retrieval/generation evaluation code.

[Paper](https://arxiv.org/abs/2410.10813) · [Source 1](https://github.com/xiaowu0162/LongMemEval) · [Source 2](https://huggingface.co/datasets/xiaowu0162/longmemeval-cleaned)

### MemBench

**Code + data.** Repository includes data-processing code and paper-sampled data. The full data is linked through Google Drive and Baidu Netdisk. Bulk download was not attempted.

[Paper](https://doi.org/10.18653/v1/2025.findings-acl.989) · [Source 1](https://github.com/import-myself/Membench)

### MemoryAgentBench

**Code + data.** Official code and ai-hyz/MemoryAgentBench data are public. The README names accurate retrieval, test-time learning, long-range understanding, and conflict resolution as the four competencies.

[Paper](https://openreview.net/forum?id=DT7JyQC3MR) · [Source 1](https://github.com/HUST-AI-HYZ/MemoryAgentBench) · [Source 2](https://huggingface.co/datasets/ai-hyz/MemoryAgentBench)

### MemoryBench

**Code + data.** The official repository supplies a runnable evaluation framework and links THUIR/MemoryBench and the full extension on Hugging Face.

[Paper](https://arxiv.org/abs/2510.17281) · [Source 1](https://github.com/THUIR/MemoryBench) · [Source 2](https://huggingface.co/datasets/THUIR/MemoryBench)

### WorldMemArena

**Code + data.** The official framework documents downloading LCZZZZ/WorldMemArena. Full dataset download and benchmark execution were not performed.

[Paper](https://arxiv.org/abs/2605.29341) · [Source 1](https://github.com/UCSB-AI/WorldMemArena) · [Source 2](https://huggingface.co/datasets/LCZZZZ/WorldMemArena)

### Mem2ActBench

**Code + data.** The benchmark directory contains qa_dataset.jsonl and toolmem_conversation.jsonl. Construction scripts are also public.

[Paper](https://doi.org/10.18653/v1/2026.acl-long.370) · [Source 1](https://github.com/Cantaloupe-M/Mem2ActBench)

### MemoryArena

**Public preview framework.** The authors label the code a preview version. Environment setup guides are available. These guides do not guarantee that every paper artifact is packaged in one downloadable dataset.

[Paper](https://arxiv.org/abs/2602.16313) · [Source 1](https://github.com/ZexueHe/MemoryArena)

### Memora

**Code + data.** The official repository states that it contains the released conversation dataset and the evaluation code used for the paper.

[Paper](https://doi.org/10.18653/v1/2026.findings-acl.1337) · [Source 1](https://github.com/geniesinc/Memora)

### PM-Bench

**Code + data.** The repository contains the scoring runtime, synthetic_week_v9.json, evaluated agent configurations, and reported runs.

[Paper](https://arxiv.org/abs/2607.12385) · [Source 1](https://github.com/genglinliu/PMBench)

### LongMemEval-V2

**Code + data.** The official repository includes data preparation and evaluation tools, and identifies xiaowu0162/longmemeval-v2 as the default dataset repository.

[Paper](https://arxiv.org/abs/2605.12493) · [Source 1](https://github.com/xiaowu0162/LongMemEval-V2) · [Source 2](https://huggingface.co/datasets/xiaowu0162/longmemeval-v2)

### AMA-Bench

**Code + data.** The official repository documents the released AMA-bench/AMA-bench test split and provides evaluation code.

[Paper](https://arxiv.org/abs/2602.22769) · [Source 1](https://github.com/AMA-Bench/AMA-Bench) · [Source 2](https://huggingface.co/datasets/AMA-bench/AMA-bench)

### PA-Bench

**Resources not found.** The paper describes 100 synthetic assistant conversations, but no matching author-provided code/data release was located in the paper or targeted searches. This is distinct from Vibrant Labs PA Bench and pairwise-alignment pa-bench.

[Paper](https://arxiv.org/abs/2609.05767) · [Source 1](https://arxiv.org/html/2609.05767v1)

### BudgetBench

**Public pilot harness.** The repository is a pilot protocol/reference harness, not a complete large-scale benchmark release. It includes synthetic memory pilots and adapters for external datasets. Some scoring is explicitly proxy-based.

[Paper](https://arxiv.org/abs/2609.13149) · [Source 1](https://github.com/aviskaar/budgetbench)

### MobileMem

**Code + data.** The official repository and Hugging Face dataset expose the text track and its construction/evaluation resources.

[Paper](https://openreview.net/forum?id=w5I11HrMgJ) · [Source 1](https://github.com/zjunlp/MobileMem) · [Source 2](https://huggingface.co/datasets/zjunlp/MobileMem)

### MobileMem-Omni

**Code + data.** Omni is a track of the same MobileMem project. The repository links image/dialogue downloads and includes omni construction and evaluation directories.

[Paper](https://arxiv.org/abs/2608.13606) · [Source 1](https://github.com/zjunlp/MobileMem) · [Source 2](https://huggingface.co/datasets/zjunlp/MobileMem)

### MEMARENA

**Anonymous data (attribution unconfirmed).** The paper says artifacts will be released upon acceptance. A matching anonymous MemArena-L dataset is publicly accessible and contains corpus and evaluation files. Its connection to the named arXiv authors/version is not explicitly established in the data card. The indexed memarena2026 code repository currently returns HTTP 404. Treat this as partial/conflicting evidence, not as fully released or wholly unreleased.

[Paper](https://arxiv.org/abs/2608.02613) · [Source 1](https://arxiv.org/html/2608.02613v1) · [Source 2](https://huggingface.co/datasets/zthsecondantigravity/memarena-l) · [Source 3](https://github.com/memarena2026/MemArena-NeurIPS2026-anon)

### Memory-QA

**Partial data release.** The official repository explicitly excludes test-s and part of test-l because of licensing restrictions. Released data and a validation script are present. The release does not include the complete paper dataset.

[Paper](https://arxiv.org/abs/2509.18436) · [Source 1](https://github.com/facebookresearch/MemoryQA)

### S-EMBER

**Code + gated data.** The official codebase provides MCQ and grounding evaluation. The Hugging Face dataset is published, but its metadata marks access as gated=auto. Users must satisfy the dataset access conditions before downloading restricted files.

[Paper](https://arxiv.org/abs/2607.02689) · [Source 1](https://github.com/facebookresearch/S-EMBER) · [Source 2](https://huggingface.co/datasets/facebook/S-EMBER)

### LifeDialBench

**Data released, evaluation code pending.** EgoMem.json and LifeMem.json are released. Automated evaluation scripts and dependency/run instructions remain marked coming soon.

[Paper](https://doi.org/10.18653/v1/2026.findings-acl.351) · [Source 1](https://github.com/RayNeo-AI-2025/LifeDialBench)

### MemGUI-Bench

**Code + data.** The repository announces Hugging Face task release and documents the emulator/runtime and evaluation setup.

[Paper](https://arxiv.org/abs/2602.06075) · [Source 1](https://github.com/lgy0404/MemGUI-Bench) · [Source 2](https://huggingface.co/datasets/lgy0404/MemGUI-Bench)

### AndroidWorld-M

**Resources not found.** STAMP Appendix A.3.1 publishes task configurations, but no author-provided downloadable artifact for AndroidWorld-M was located. Public AndroidWorld is an upstream benchmark, not this modified variant.

[Paper](https://arxiv.org/abs/2605.29324) · [Source 1](https://arxiv.org/html/2605.29324v1)

### Memory-World

**Resources not found.** The STAMP paper describes Memory-World and its environment construction. No matching official code/data release URL was located in the paper or targeted searches.

[Paper](https://arxiv.org/abs/2605.29324) · [Source 1](https://arxiv.org/html/2605.29324v1)

### DataScope

**Release planned, data unconfirmed.** The ATMem paper says its code and model will be publicly available. No current official DataScope data or code release URL was located. The statement does not establish a dataset release date.

[Paper](https://arxiv.org/abs/2606.31612) · [Source 1](https://arxiv.org/html/2606.31612v1)

### AndroidIntent

**Code + derived data.** PersonalAlign supplies personal_execution and proactive_suggestion JSON/CSV. Its setup also requires upstream FingerTip 20k. The README reports recovery after a disk failure, so completeness of every original experiment artifact is not assumed.

[Paper](https://doi.org/10.18653/v1/2026.acl-long.1669) · [Source 1](https://github.com/iLearn-Lab/ACL26-PersonalAlign) · [Source 2](https://github.com/iLearn-Lab/ACL26-PersonalAlign/tree/main/data)

### MobileIAR

**Code + data.** The authors link wuuuuuz/MobileIAR on Hugging Face and provide personalized query/SOP and evaluation preparation code.

[Paper](https://arxiv.org/abs/2508.08645) · [Source 1](https://github.com/MadeAgents/Quick-on-the-Uptake) · [Source 2](https://huggingface.co/datasets/wuuuuuz/MobileIAR)

### PSPA-Bench

**Anonymous link (contents unconfirmed).** Footnote 2 provides an anonymous.4open.science/status/PSPA-Bench link and claims code/data availability. The URL returns an HTTP 200 application shell, but repository contents/downloads could not be verified. Preserve the author link without equating this with a confirmed full release.

[Paper](https://arxiv.org/abs/2603.29318) · [Source 1](https://arxiv.org/html/2603.29318v1) · [Source 2](https://anonymous.4open.science/status/PSPA-Bench)

### DesktopBench

**Code + derived data.** HaoranYin/desktopbench releases annotations, sessions, summaries, provenance, and reconstruction tools. It excludes VideoGUI screenshot bytes and raw records. Full runtime inputs are reconstructed from upstream revisions. FOCAL reproduction code is public separately.

[Paper](https://arxiv.org/abs/2604.19541) · [Source 1](https://huggingface.co/datasets/HaoranYin/desktopbench) · [Source 2](https://github.com/Haoran2099/focal)

### HME-QA

**Annotations released, pipeline pending.** HME-QA_annotations_v0.json and a video download script are present. The README states the full training/evaluation pipeline is still pending. Source videos use the upstream Ego4D access process.

[Paper](https://arxiv.org/abs/2508.01915) · [Source 1](https://github.com/yahskapar/EgoTrigger)

### EgoLifeQA

**Code + data resources.** The official project links EgoLife datasets and provides EgoRAG/EgoGPT code. This check confirms public resource access, not every annotation or media file in every release.

[Paper](https://arxiv.org/abs/2503.03803) · [Source 1](https://github.com/EvolvingLMMs-Lab/EgoLife) · [Source 2](https://egolife-ai.github.io/blog/)

### M3-Bench

**Code + data resources.** The repository contains web annotations, links M3-Bench-robot data on Hugging Face, and uses video URLs for the web subset.

[Paper](https://arxiv.org/abs/2508.09736) · [Source 1](https://github.com/bytedance-seed/m3-agent)

### MEMENTO

**Code + task data.** The repository states all three stages of task data are in data/datasets. Simulator assets require PARTNR/Habitat setup.

[Paper](https://arxiv.org/abs/2505.16348) · [Source 1](https://github.com/Connoriginal/MEMENTO)
