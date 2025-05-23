Content from the zip file `/home/runner/work/docs-conversion-tool/docs-conversion-tool/docs/documents/test_files.zip`:

## File: test.docx

AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation

Qingyun Wu , Gagan Bansal , Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Awadallah, Ryen W. White, Doug Burger, Chi Wang

# Abstract

AutoGen is an open-source framework that allows developers to build LLM applications via multiple agents that can converse with each other to accomplish tasks. AutoGen agents are customizable, conversable, and can operate in various modes that employ combinations of LLMs, human inputs, and tools. Using AutoGen, developers can also flexibly define agent interaction behaviors. Both natural language and computer code can be used to program flexible conversation patterns for different applications. AutoGen serves as a generic framework for building diverse applications of various complexities and LLM capacities. Empirical studies demonstrate the effectiveness of the framework in many example applications, with domains ranging from mathematics, coding, question answering, operations research, online decision-making, entertainment, etc.

# Introduction

Large language models (LLMs) are becoming a crucial building block in developing powerful agents that utilize LLMs for reasoning, tool usage, and adapting to new observations (Yao et al., 2022; Xi et al., 2023; Wang et al., 2023b) in many real-world tasks. Given the expanding tasks that could benefit from LLMs and the growing task complexity, an intuitive approach to scale up the power of agents is to use multiple agents that cooperate. Prior work suggests that multiple agents can help encourage divergent thinking (Liang et al., 2023), improve factuality and reasoning (Du et al., 2023), and provide validation (Wu et al., 2023).

## d666f1f7-46cb-42bd-9a39-9a39cf2a509f

In light of the intuition and early evidence of promise, it is intriguing to ask the following question: how can we facilitate the development of LLM applications that could span a broad spectrum of domains and complexities based on the multi-agent approach? Our insight is to use multi-agent conversations to achieve it. There are at least three reasons confirming its general feasibility and utility thanks to recent advances in LLMs: First, because chat optimized LLMs (e.g., GPT-4) show the ability to incorporate feedback, LLM agents can cooperate through conversations with each other or human(s), e.g., a dialog where agents provide and seek reasoning, observations, critiques, and validation. Second, because a single LLM can exhibit a broad range of capabilities (especially when configured with the correct prompt and inference settings), conversations between differently configured agents can help combine these broad LLM capabilities in a modular and complementary manner. Third, LLMs have demonstrated ability to solve complex tasks when the tasks are broken into simpler subtasks. Here is a random UUID in the middle of the paragraph! 314b0a30-5b04-470b-b9f7-eed2c2bec74a Multi-agent conversations can enable this partitioning and integration in an intuitive manner. How can we leverage the above insights and support different applications with the common requirement of coordinating multiple agents, potentially backed by LLMs, humans, or tools exhibiting different capacities? We desire a multi-agent conversation framework with generic abstraction and effective implementation that has the flexibility to satisfy different application needs. Achieving this requires addressing two critical questions: (1) How can we design individual agents that are capable, reusable, customizable, and effective in multi-agent collaboration? (2) How can we develop a straightforward, unified interface that can accommodate a wide range of agent conversation patterns? In practice, applications of varying complexities may need distinct sets of agents with specific capabilities, and may require different conversation patterns, such as single- or multi-turn dialogs, different human involvement modes, and static vs. dynamic conversation. Moreover, developers may prefer the flexibility to program agent interactions in natural language or code. Failing to adequately address these two questions would limit the framework’s scope of applicability and generality.

Here is a random table for .docx parsing test purposes:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 |
| 13 | 14 | 49e168b7-d2ae-407f-a055-2167576f39a1 | 15 | 16 | 17 |
| 18 | 19 | 20 | 21 | 22 | 23 |
| 24 | 25 | 26 | 27 | 28 | 29 |

## File: test.jpg

## File: test.pptx

<!-- Slide number: 1 -->
# AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation
Qingyun Wu , Gagan Bansal , Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Awadallah, Ryen W. White, Doug Burger, Chi Wang

<!-- Slide number: 2 -->
# 2cdda5c8-e50e-4db4-b5f0-9722a649f455

![The first page of the AutoGen ArXiv paper. 44bf7d06-5e7a-4a40-a2e1-a2e42ef28c8a](Picture4.jpg)
AutoGen is an open-source framework that allows developers to build LLM applications via multiple agents that can converse with each other to accomplish tasks. AutoGen agents are customizable, conversable, and can operate in various modes that employ combinations of LLMs, human inputs, and tools. Using AutoGen, developers can also flexibly define agent interaction behaviors. Both natural language and 04191ea8-5c73-4215-a1d3-1cfb43aaaf12 can be used to program flexible conversation patterns for different applications. AutoGen serves as a generic framework for building diverse applications of various complexities and LLM capacities. Empirical studies demonstrate the effectiveness of the framework in many example applications, with domains ranging from mathematics, coding, question answering, operations research, online decision-making, entertainment, etc.

<!-- Slide number: 3 -->
# A table to test parsing:
| ColA | ColB | ColC | ColD | ColE | ColF |
| --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 1b92870d-e3b5-4e65-8153-919f4ff45592 | 11 | 12 |
| 13 | 14 | 15 | 16 | 17 | 18 |

## File: test.xlsx

## Sheet1
| Alpha | Beta | Gamma | Delta |
| --- | --- | --- | --- |
| 89 | 82 | 100 | 12 |
| 76 | 89 | 33 | 42 |
| 60 | 84 | 19 | 19 |
| 7 | 69 | 10 | 17 |
| 87 | 89 | 86 | 54 |
| 23 | 4 | 89 | 25 |
| 70 | 84 | 62 | 59 |
| 83 | 37 | 43 | 21 |
| 71 | 15 | 88 | 32 |
| 20 | 62 | 20 | 67 |
| 67 | 18 | 15 | 48 |
| 42 | 5 | 15 | 67 |
| 58 | 6ff4173b-42a5-4784-9b19-f49caff4d93d | 22 | 9 |
| 49 | 93 | 6 | 38 |
| 82 | 28 | 1 | 39 |
| 95 | 55 | 18 | 82 |
| 50 | 46 | 98 | 86 |
| 31 | 46 | 47 | 82 |
| 40 | 65 | 19 | 31 |
| 95 | 65 | 29 | 62 |
| 68 | 57 | 34 | 54 |
| 96 | 66 | 63 | 14 |
| 87 | 93 | 95 | 80 |

## 09060124-b5e7-4717-9d07-3c046eb
| ColA | ColB | ColC | ColD |
| --- | --- | --- | --- |
| 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 |
| 13 | 14 | 15 | affc7dad-52dc-4b98-9b5d-51e65d8a8ad0 |

## File: test_blog.html

[Skip to main content](#__docusaurus_skipToContent_fallback)

What's new in AutoGen? Read [this blog](/autogen/blog/2024/03/03/AutoGen-Update) for an overview of updates

[![AutoGen](/autogen/img/ag.svg)![AutoGen](/autogen/img/ag.svg)

**AutoGen**](/autogen/)[Docs](/autogen/docs/Getting-Started)[API](/autogen/docs/reference/agentchat/conversable_agent)[Blog](/autogen/blog)[FAQ](/autogen/docs/FAQ)[Examples](/autogen/docs/Examples)[Notebooks](/autogen/docs/notebooks)[Gallery](/autogen/docs/Gallery)

Other Languages

* [Dotnet](https://microsoft.github.io/autogen-for-net/)

[GitHub](https://github.com/microsoft/autogen)

`ctrl``K`

Recent posts

* [What's New in AutoGen?](/autogen/blog/2024/03/03/AutoGen-Update)
* [StateFlow - Build LLM Workflows with Customized State-Oriented Transition Function in GroupChat](/autogen/blog/2024/02/29/StateFlow)
* [FSM Group Chat -- User-specified agent transitions](/autogen/blog/2024/02/11/FSM-GroupChat)
* [Anny: Assisting AutoGen Devs Via AutoGen](/autogen/blog/2024/02/02/AutoAnny)
* [AutoGen with Custom Models: Empowering Users to Use Their Own Inference Mechanism](/autogen/blog/2024/01/26/Custom-Models)
* [AutoGenBench -- A Tool for Measuring and Evaluating AutoGen Agents](/autogen/blog/2024/01/25/AutoGenBench)
* [Code execution is now by default inside docker container](/autogen/blog/2024/01/23/Code-execution-in-docker)
* [All About Agent Descriptions](/autogen/blog/2023/12/29/AgentDescriptions)
* [AgentOptimizer - An Agentic Way to Train Your LLM Agent](/autogen/blog/2023/12/23/AgentOptimizer)
* [AutoGen Studio: Interactively Explore Multi-Agent Workflows](/autogen/blog/2023/12/01/AutoGenStudio)
* [Agent AutoBuild - Automatically Building Multi-agent Systems](/autogen/blog/2023/11/26/Agent-AutoBuild)
* [How to Assess Utility of LLM-powered Applications?](/autogen/blog/2023/11/20/AgentEval)
* [AutoGen Meets GPTs](/autogen/blog/2023/11/13/OAI-assistants)
* [EcoAssistant - Using LLM Assistants More Accurately and Affordably](/autogen/blog/2023/11/09/EcoAssistant)
* [Multimodal with GPT-4V and LLaVA](/autogen/blog/2023/11/06/LMM-Agent)
* [AutoGen's Teachable Agents](/autogen/blog/2023/10/26/TeachableAgent)
* [Retrieval-Augmented Generation (RAG) Applications with AutoGen](/autogen/blog/2023/10/18/RetrieveChat)
* [Use AutoGen for Local LLMs](/autogen/blog/2023/07/14/Local-LLMs)
* [MathChat - An Conversational Framework to Solve Math Problems](/autogen/blog/2023/06/28/MathChat)
* [Achieve More, Pay Less - Use GPT-4 Smartly](/autogen/blog/2023/05/18/GPT-adaptive-humaneval)
* [Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH](/autogen/blog/2023/04/21/LLM-tuning-math)

# Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH

April 21, 2023 · 6 min read

[![Chi Wang](https://github.com/sonichi.png)](https://www.linkedin.com/in/chi-wang-49b15b16/)

[Chi Wang](https://www.linkedin.com/in/chi-wang-49b15b16/)

Principal Researcher at Microsoft Research

![level 2 algebra](/autogen/assets/images/level2algebra-659ba95286432d9945fc89e84d606797.png)

**TL;DR:**

* **Just by tuning the inference parameters like model, number of responses, temperature etc. without changing any model weights or prompt, the baseline accuracy of untuned gpt-4 can be improved by 20% in high school math competition problems.**
* **For easy problems, the tuned gpt-3.5-turbo model vastly outperformed untuned gpt-4 in accuracy (e.g., 90% vs. 70%) and cost efficiency. For hard problems, the tuned gpt-4 is much more accurate (e.g., 35% vs. 20%) and less expensive than untuned gpt-4.**
* **AutoGen can help with model selection, parameter tuning, and cost-saving in LLM applications.**

Large language models (LLMs) are powerful tools that can generate natural language texts for various applications, such as chatbots, summarization, translation, and more. GPT-4 is currently the state of the art LLM in the world. Is model selection irrelevant? What about inference parameters?

In this blog post, we will explore how model and inference parameter matter in LLM applications, using a case study for [MATH](https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html), a benchmark for evaluating LLMs on advanced mathematical problem solving. MATH consists of 12K math competition problems from AMC-10, AMC-12 and AIME. Each problem is accompanied by a step-by-step solution.

We will use AutoGen to automatically find the best model and inference parameter for LLMs on a given task and dataset given an inference budget, using a novel low-cost search & pruning strategy. AutoGen currently supports all the LLMs from OpenAI, such as GPT-3.5 and GPT-4.

We will use AutoGen to perform model selection and inference parameter tuning. Then we compare the performance and inference cost on solving algebra problems with the untuned gpt-4. We will also analyze how different difficulty levels affect the results.

## Experiment Setup[​](#experiment-setup "Direct link to Experiment Setup")

We use AutoGen to select between the following models with a target inference budget $0.02 per instance:

* gpt-3.5-turbo, a relatively cheap model that powers the popular ChatGPT app
* gpt-4, the state of the art LLM that costs more than 10 times of gpt-3.5-turbo

We adapt the models using 20 examples in the train set, using the problem statement as the input and generating the solution as the output. We use the following inference parameters:

* temperature: The parameter that controls the randomness of the output text. A higher temperature means more diversity but less coherence. We search for the optimal temperature in the range of [0, 1].
* top\_p: The parameter that controls the probability mass of the output tokens. Only tokens with a cumulative probability less than or equal to top-p are considered. A lower top-p means more diversity but less coherence. We search for the optimal top-p in the range of [0, 1].
* max\_tokens: The maximum number of tokens that can be generated for each output. We search for the optimal max length in the range of [50, 1000].
* n: The number of responses to generate. We search for the optimal n in the range of [1, 100].
* prompt: We use the template: "{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in \boxed{{}}." where {problem} will be replaced by the math problem instance.

In this experiment, when n > 1, we find the answer with highest votes among all the responses and then select it as the final answer to compare with the ground truth. For example, if n = 5 and 3 of the responses contain a final answer 301 while 2 of the responses contain a final answer 159, we choose 301 as the final answer. This can help with resolving potential errors due to randomness. We use the average accuracy and average inference cost as the metric to evaluate the performance over a dataset. The inference cost of a particular instance is measured by the price per 1K tokens and the number of tokens consumed.

## Experiment Results[​](#experiment-results "Direct link to Experiment Results")

The first figure in this blog post shows the average accuracy and average inference cost of each configuration on the level 2 Algebra test set.

Surprisingly, the tuned gpt-3.5-turbo model is selected as a better model and it vastly outperforms untuned gpt-4 in accuracy (92% vs. 70%) with equal or 2.5 times higher inference budget.
The same observation can be obtained on the level 3 Algebra test set.

![level 3 algebra](/autogen/assets/images/level3algebra-94e87a683ac8832ac7ae6f41f30131a4.png)

However, the selected model changes on level 4 Algebra.

![level 4 algebra](/autogen/assets/images/level4algebra-492beb22490df30d6cc258f061912dcd.png)

This time gpt-4 is selected as the best model. The tuned gpt-4 achieves much higher accuracy (56% vs. 44%) and lower cost than the untuned gpt-4.
On level 5 the result is similar.

![level 5 algebra](/autogen/assets/images/level5algebra-8fba701551334296d08580b4b489fe56.png)

We can see that AutoGen has found different optimal model and inference parameters for each subset of a particular level, which shows that these parameters matter in cost-sensitive LLM applications and need to be carefully tuned or adapted.

An example notebook to run these experiments can be found at: <https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/autogen_chatgpt.ipynb>. The experiments were run when AutoGen was a subpackage in FLAML.

## Analysis and Discussion[​](#analysis-and-discussion "Direct link to Analysis and Discussion")

While gpt-3.5-turbo demonstrates competitive accuracy with voted answers in relatively easy algebra problems under the same inference budget, gpt-4 is a better choice for the most difficult problems. In general, through parameter tuning and model selection, we can identify the opportunity to save the expensive model for more challenging tasks, and improve the overall effectiveness of a budget-constrained system.

There are many other alternative ways of solving math problems, which we have not covered in this blog post. When there are choices beyond the inference parameters, they can be generally tuned via [`flaml.tune`](https://microsoft.github.io/FLAML/docs/Use-Cases/Tune-User-Defined-Function).

The need for model selection, parameter tuning and cost saving is not specific to the math problems. The [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT) project is an example where high cost can easily prevent a generic complex task to be accomplished as it needs many LLM inference calls.

## For Further Reading[​](#for-further-reading "Direct link to For Further Reading")

* [Research paper about the tuning technique](https://arxiv.org/abs/2303.04673)
* [Documentation about inference tuning](/autogen/docs/Use-Cases/enhanced_inference)

*Do you have any experience to share about LLM applications? Do you like to see more support or research of LLM optimization or automation? Please join our [Discord](https://discord.gg/pAbnFJrkgZ) server for discussion.*

**Tags:**

* [LLM](/autogen/blog/tags/llm)
* [GPT](/autogen/blog/tags/gpt)
* [research](/autogen/blog/tags/research)

[Newer Post

Achieve More, Pay Less - Use GPT-4 Smartly](/autogen/blog/2023/05/18/GPT-adaptive-humaneval)

* [Experiment Setup](#experiment-setup)
* [Experiment Results](#experiment-results)
* [Analysis and Discussion](#analysis-and-discussion)
* [For Further Reading](#for-further-reading)

Community

* [Discord](https://discord.gg/pAbnFJrkgZ)
* [Twitter](https://twitter.com/pyautogen)

Copyright © 2024 AutoGen Authors | [Privacy and Cookies](https://go.microsoft.com/fwlink/?LinkId=521839)

## File: test_serp.html

Skip to content[#](https://www.bing.com/ck/a?!&&p=f8f2368f437d7f27JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA0NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1Lz9GT1JNPVo5RkQx&ntb=1)

Microsoft wikipedia

Tab

Microsoft wikipedia

![Profile Picture](data:image/png;base64...)RewardsMobile

* [Search](https://www.bing.com/ck/a?!&&p=800deebc60d3525aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1Lz9zY29wZT13ZWImRk9STT1IRFJTQzE&ntb=1)
* Copilot
* [Images](https://www.bing.com/ck/a?!&&p=f86c8e6261ba719cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L2ltYWdlcy9zZWFyY2g_cT1NaWNyb3NvZnQrd2lraXBlZGlhJkZPUk09SERSU0Mz&ntb=1)
* [Videos](https://www.bing.com/ck/a?!&&p=00ceb85153193903JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzNA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3ZpZGVvcy9zZWFyY2g_cT1NaWNyb3NvZnQrd2lraXBlZGlhJkZPUk09SERSU0M0&ntb=1)
* [Maps](https://www.bing.com/ck/a?!&&p=ba04d027117fd65eJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzNQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L21hcHM_cT1NaWNyb3NvZnQrd2lraXBlZGlhJkZPUk09SERSU0M2&ntb=1)
* [News](https://www.bing.com/ck/a?!&&p=ede45af532d595baJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L25ld3Mvc2VhcmNoP3E9TWljcm9zb2Z0K3dpa2lwZWRpYSZGT1JNPUhEUlNDNw&ntb=1)
* [Shopping](https://www.bing.com/ck/a?!&&p=dd6b59ad4c4a2a86JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3Nob3A_cT1NaWNyb3NvZnQrd2lraXBlZGlhJkZPUk09U0hPUFRC&ntb=1)
* More

  + [Flights](https://www.bing.com/ck/a?!&&p=b2ea66b68609b879JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3RyYXZlbC9zZWFyY2g_cT1NaWNyb3NvZnQrd2lraXBlZGlhJm09ZmxpZ2h0cyZGT1JNPUZCU0NPUA&ntb=1)
  + [Travel](https://www.bing.com/ck/a?!&&p=e0058f37de8ac10bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTAzOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3RyYXZlbC9zZWFyY2g_cT1NaWNyb3NvZnQrd2lraXBlZGlhJm09dHJhdmVsJkZPUk09VEhTQ09Q&ntb=1)
  + [Hotels](https://www.bing.com/ck/a?!&&p=fd75c10990b11401JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA0MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3RyYXZlbC9zZWFyY2g_cT1NaWNyb3NvZnQrd2lraXBlZGlhJm09aG90ZWxzJkZPUk09SFRTQ09Q&ntb=1)
  + [Real Estate](https://www.bing.com/ck/a?!&&p=29776d032124c57cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA0MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L2hvbWVzP0ZPUk09MDAwMDYw&ntb=1)
  + [My Bing](/bp/verify?FORM=000061)
* Notebook
* Tools

Copilot

Your everyday AI companion

About 310,000 results

Any time

Open links in new tab

1. See more

   ![See more](data:image/svg+xml...)

   See all on Wikipedia

   ![See more](data:image/svg+xml...)

   [Wikipedia

   https://en.wikipedia.org/wiki/Microsoft](https://www.bing.com/ck/a?!&&p=04069a66b8059fd6JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTIxOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1)

   ## [Microsoft - Wikipedia](https://www.bing.com/ck/a?!&&p=04069a66b8059fd6JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTIxOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1)

   Microsoft Corporation is **an American multinational corporation and technology company headquartered** in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser. Its flagship … [See more](https://www.bing.com/ck/a?!&&p=ba3b694dc442a8dfJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA1Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1)

   [History](https://www.bing.com/ck/a?!&&p=f017989ac0ed1801JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTg2Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0hpc3Rvcnk&ntb=1)

   1972–1985: Founding
   Childhood friends [Bill Gates](https://www.bing.com/ck/a?!&&p=e8a82a8e9e485f90JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA1NQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUJpbGwlMjBHYXRlcyUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1) and [Paul Allen](https://www.bing.com/ck/a?!&&p=2c33f877821d30a3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA1Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPVBhdWwlMjBBbGxlbiUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1) sought to make a business using their skills in [computer](https://www.bing.com/ck/a?!&&p=0fb021aaaa59124fJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA1Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUNvbXB1dGVyJTIwcHJvZ3JhbW1pbmclMjB3aWtpcGVkaWEmZm9ybT1XSUtJUkU&ntb=1)… [See more](https://www.bing.com/ck/a?!&&p=65420eff7eb51214JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA1OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0hpc3Rvcnk&ntb=1)

   [![Corporate identity image](data:image/gif;base64...)](https://www.bing.com/ck/a?!&&p=0b6d08e41ba10211JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjAyOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9pZGVudGl0eQ&ntb=1 "Corporate identity")

   [![Corporate affairs image](data:image/gif;base64...)](https://www.bing.com/ck/a?!&&p=8a62ecc215295a64JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTkzMA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9hZmZhaXJz&ntb=1 "Corporate affairs")

   [Corporate identity](https://www.bing.com/ck/a?!&&p=c3705a50c2db42e2JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjAyNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9pZGVudGl0eQ&ntb=1)

   Corporate culture
   Technical references for developers and articles for various Microsoft magazines such as Microsoft … [See more](https://www.bing.com/ck/a?!&&p=cf9d999b6ab0ccf5JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA2Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9pZGVudGl0eQ&ntb=1)

   [External links](https://www.bing.com/ck/a?!&&p=86c89fe0b5a642f3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA0Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0V4dGVybmFsX2xpbmtz&ntb=1)

   • [Official website](https://www.bing.com/ck/a?!&&p=3c1d097ecdd13455JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3NQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS8&ntb=1)
   • Business data for Microsoft Corporation:
   • [Microsoft companies](https://www.bing.com/ck/a?!&&p=9125f011fc2743a3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9vcGVuY29ycG9yYXRlcy5jb20vY29ycG9yYXRlX2dyb3VwaW5ncy9NaWNyb3NvZnQ&ntb=1) grouped at [OpenCorporates](https://www.bing.com/ck/a?!&&p=fd53dd20b10a146cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPU9wZW5Db3Jwb3JhdGVzJTIwd2lraXBlZGlhJmZvcm09V0lLSVJF&ntb=1) [See more](https://www.bing.com/ck/a?!&&p=12d5646a2c0f5f94JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0V4dGVybmFsX2xpbmtz&ntb=1)

   [![Overview image](data:image/gif;base64...)](https://www.bing.com/ck/a?!&&p=81a04b8d73ca5871JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTYwMg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1 "Overview")

   [Corporate affairs](https://www.bing.com/ck/a?!&&p=490b59718b425b7dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTkyOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9hZmZhaXJz&ntb=1)

   Board of directors
   The company is run by a [board of directors](https://www.bing.com/ck/a?!&&p=f5af36a719e9144cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA2MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUJvYXJkJTIwb2YlMjBkaXJlY3RvcnMlMjB3aWtpcGVkaWEmZm9ybT1XSUtJUkU&ntb=1) made up of mostly company outsiders, as is customary for publicly traded companies. Members of the board of directors as of December 2023 are [Satya Nadella](https://www.bing.com/ck/a?!&&p=d71d49c17b64a588JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA2Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPVNhdHlhJTIwTmFkZWxsYSUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1) [See more](https://www.bing.com/ck/a?!&&p=693104481e5cf757JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA2Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9hZmZhaXJz&ntb=1)

   [See also](https://www.bing.com/ck/a?!&&p=9eb238a187558ba3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjAzNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I1NlZV9hbHNv&ntb=1)

   • [List of Microsoft software](https://www.bing.com/ck/a?!&&p=ae287903ee57d05bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA2OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUxpc3QlMjBvZiUyME1pY3Jvc29mdCUyMHNvZnR3YXJlJTIwd2lraXBlZGlhJmZvcm09V0lLSVJF&ntb=1)
   • [Microsoft hardware](https://www.bing.com/ck/a?!&&p=d5f69beef4e835cbJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPU1pY3Jvc29mdCUyMGhhcmR3YXJlJTIwd2lraXBlZGlhJmZvcm09V0lLSVJF&ntb=1)
   • [List of mergers and acquisitions by Microsoft](https://www.bing.com/ck/a?!&&p=1c30876e1cd51600JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUxpc3QlMjBvZiUyMG1lcmdlcnMlMjBhbmQlMjBhY3F1aXNpdGlvbnMlMjBieSUyME1pY3Jvc29mdCUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1) [See more](https://www.bing.com/ck/a?!&&p=f3a9b197783b17dcJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA3Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I1NlZV9hbHNv&ntb=1)

   From Wikipedia

   [![From Wikipedia](data:image/svg+xml...)](https://www.bing.com/ck/a?!&&p=e200665cd7528669JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTYwMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1)

   Content

   [History](https://www.bing.com/ck/a?!&&p=f017989ac0ed1801JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTg2Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0hpc3Rvcnk&ntb=1)[Corporate affairs](https://www.bing.com/ck/a?!&&p=490b59718b425b7dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTkyOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9hZmZhaXJz&ntb=1)[Corporate identity](https://www.bing.com/ck/a?!&&p=c3705a50c2db42e2JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjAyNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0NvcnBvcmF0ZV9pZGVudGl0eQ&ntb=1)[See also](https://www.bing.com/ck/a?!&&p=9eb238a187558ba3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjAzNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I1NlZV9hbHNv&ntb=1)[External links](https://www.bing.com/ck/a?!&&p=86c89fe0b5a642f3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjA0Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0I0V4dGVybmFsX2xpbmtz&ntb=1)

   See all sections

   Wikipedia text under [CC-BY-SA license](https://www.bing.com/ck/a?!&&p=6b2d99f1f051f86cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM4Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLw&ntb=1)

   Feedback

   Thanks!Tell us more
2. [Wikipedia

   https://en.wikipedia.org/wiki/History\_of\_Microsoft](https://www.bing.com/ck/a?!&&p=8fbc98b9831c1cebJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTI0OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlzdG9yeV9vZl9NaWNyb3NvZnQ&ntb=1)

   ## [History of Microsoft - Wikipedia](https://www.bing.com/ck/a?!&&p=8fbc98b9831c1cebJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTI0OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlzdG9yeV9vZl9NaWNyb3NvZnQ&ntb=1)

   * Overview
   * 1975–1985: The founding of Microsoft
   * 1985–1994: Windows and Office
   * 1995–2007: Foray into the Web, Windows 95, Windows XP, and Xbox
   * 2007–2011: Microsoft Azure, Windows Vista, Windows 7, and Microsoft Stores
   * 2011–2014: Windows 8, Xbox One, Outlook.com, and Surface devices
   * 2014–2020: Windows 10, Windows 10 Mobile, Microsoft Edge and HoloLens
   * 2020–present: Acquisitions, Xbox Series X/S, and Windows 11

   ![](data:image/gif;base64...)

   [Microsoft](/search?q=Microsoft%20wikipedia&form=WIKIRE) is a multinational computer technology corporation. Microsoft was founded on April 4, 1975, by [Bill Gates](https://www.bing.com/ck/a?!&&p=c6e5bc64bbb7aa9cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUJpbGwlMjBHYXRlcyUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1) and [Paul Allen](https://www.bing.com/ck/a?!&&p=69559e55b5ef4786JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyMg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPVBhdWwlMjBBbGxlbiUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1) in [Albuquerque, New Mexico](https://www.bing.com/ck/a?!&&p=77d0942ac8633c1bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUFsYnVxdWVycXVlJTJDJTIwTmV3JTIwTWV4aWNvJTIwd2lraXBlZGlhJmZvcm09V0lLSVJF&ntb=1). Its current best-selling products are the [Microsoft Windows](https://www.bing.com/ck/a?!&&p=709a122ec9716ce3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyNA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPU1pY3Jvc29mdCUyMFdpbmRvd3MlMjB3aWtpcGVkaWEmZm9ybT1XSUtJUkU&ntb=1) [operating system](https://www.bing.com/ck/a?!&&p=3e0d700620a8658eJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyNQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPU9wZXJhdGluZyUyMHN5c3RlbSUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1); [Microsoft Office](https://www.bing.com/ck/a?!&&p=66bec30a31b559a7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPU1pY3Jvc29mdCUyME9mZmljZSUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1), a suite of productivity software; [Xbox](https://www.bing.com/ck/a?!&&p=7d3b4900ee5f9ba3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPVhib3glMjB3aWtpcGVkaWEmZm9ybT1XSUtJUkU&ntb=1), a line of entertainment of games, music, and video; [Bing](https://www.bing.com/ck/a?!&&p=38676e12b5bcfdf7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPUJpbmclMjAoc2VhcmNoJTIwZW5naW5lKSUyMHdpa2lwZWRpYSZmb3JtPVdJS0lSRQ&ntb=1), a line of search engines; and [Microsoft Azure](https://www.bing.com/ck/a?!&&p=3c4825c276c0a8c6JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjEyOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPU1pY3Jvc29mdCUyMEF6dXJlJTIwd2lraXBlZGlhJmZvcm09V0lLSVJF&ntb=1), …

   [Wikipedia](https://www.bing.com/ck/a?!&&p=d83977ac2d5978faJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE0MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlzdG9yeV9vZl9NaWNyb3NvZnQ&ntb=1) · Text under [CC-BY-SA license](https://www.bing.com/ck/a?!&&p=291066e63c3f1ba8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE0MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLw&ntb=1)

   ## Explore further

   [A Brief History of **Microsoft** - The Worlds Biggest Software …](https://www.bing.com/ck/a?!&&p=9ea1b6ff4f91e5eeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE0OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9jb250ZW50LmRzcC5jby51ay9hLWJyaWVmLWhpc3Rvcnktb2YtbWljcm9zb2Z0LXRoZS13b3JsZHMtYmlnZ2VzdC1zb2Z0d2FyZS1jb21wYW55&ntb=1)

   [content.dsp.co.uk](https://www.bing.com/ck/a?!&&p=9ea1b6ff4f91e5eeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE0OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9jb250ZW50LmRzcC5jby51ay9hLWJyaWVmLWhpc3Rvcnktb2YtbWljcm9zb2Z0LXRoZS13b3JsZHMtYmlnZ2VzdC1zb2Z0d2FyZS1jb21wYW55&ntb=1)

   [**Timeline of Microsoft** - Wikipedia](https://www.bing.com/ck/a?!&&p=e4aaeb38b4ce9a71JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE1MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltZWxpbmVfb2ZfTWljcm9zb2Z0&ntb=1)

   [en.wikipedia.org](https://www.bing.com/ck/a?!&&p=e4aaeb38b4ce9a71JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE1MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltZWxpbmVfb2ZfTWljcm9zb2Z0&ntb=1)

   [Recommended to you based on what's popular • Feedback](https://www.bing.com/ck/a?!&&p=b582f6f515430eb6JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM4OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1amF2YXNjcmlwdDp2b2lkKDAp&ntb=1)
3. [Wikipedia

   https://en.wikipedia.org/wiki/Microsoft\_…](https://www.bing.com/ck/a?!&&p=14f8d49ace7b9cc7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTI5Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0X1dpbmRvd3M&ntb=1)

   ## [Microsoft Windows - Wikipedia](https://www.bing.com/ck/a?!&&p=14f8d49ace7b9cc7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTI5Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0X1dpbmRvd3M&ntb=1)

   WEB**Microsoft** Windows is a product line of proprietary graphical operating systems developed and marketed by **Microsoft**. It is grouped into families …

   * **Developer:** [Microsoft](/search?q=Microsoft+wikipedia&FORM=LFACTRE "Microsoft")
   * **Latest release:** 22H2 (10.0.22621.2428) (October 10, 2023; 0 days ago) [±]
   * **Initial release:** November 20, 1985; 37 years ago

   ## Explore further

   [Which version of **Windows** operating system am I running?](https://www.bing.com/ck/a?!&&p=d28cf3cb5e564ae9JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE3MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zdXBwb3J0Lm1pY3Jvc29mdC5jb20vZW4tdXMvd2luZG93cy93aGljaC12ZXJzaW9uLW9mLXdpbmRvd3Mtb3BlcmF0aW5nLXN5c3RlbS1hbS1pLXJ1bm5pbmctNjI4YmVjOTktNDc2YS0yYzEzLTUyOTYtOWRkMDgxY2RkODA4&ntb=1)

   [support.microsoft.com](https://www.bing.com/ck/a?!&&p=d28cf3cb5e564ae9JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE3MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zdXBwb3J0Lm1pY3Jvc29mdC5jb20vZW4tdXMvd2luZG93cy93aGljaC12ZXJzaW9uLW9mLXdpbmRvd3Mtb3BlcmF0aW5nLXN5c3RlbS1hbS1pLXJ1bm5pbmctNjI4YmVjOTktNDc2YS0yYzEzLTUyOTYtOWRkMDgxY2RkODA4&ntb=1)

   [A History of Microsoft Windows - Timeline](https://www.bing.com/ck/a?!&&p=366215607634eb13JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE3Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cudGhld2luZG93c2NsdWIuY29tL2hpc3Rvcnktb2Ytd2luZG93cw&ntb=1)

   [thewindowsclub.com](https://www.bing.com/ck/a?!&&p=366215607634eb13JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE3Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cudGhld2luZG93c2NsdWIuY29tL2hpc3Rvcnktb2Ytd2luZG93cw&ntb=1)

   [Recommended to you based on what's popular • Feedback](https://www.bing.com/ck/a?!&&p=adfeacf491bd9180JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM5MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1amF2YXNjcmlwdDp2b2lkKDAp&ntb=1)
4. [Wikipedia

   https://simple.wikipedia.org/wiki/Microsoft](https://www.bing.com/ck/a?!&&p=1979d38d9826cdf8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTMyNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zaW1wbGUud2lraXBlZGlhLm9yZy93aWtpL01pY3Jvc29mdA&ntb=1)

   ## [Microsoft - Simple English Wikipedia, the free encyclopedia](https://www.bing.com/ck/a?!&&p=1979d38d9826cdf8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTMyNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zaW1wbGUud2lraXBlZGlhLm9yZy93aWtpL01pY3Jvc29mdA&ntb=1)

   * Software
   * Services
   * Hardware

   1. Microsoft Windows is an operating system, which means that it is the basic software that makes people's computers work and lets other programs work. The majority of desktop and laptop computers run...
   2. Microsoft Office is an office suite. It lets people write documents on their computer with Microsoft Word, make charts and graphs with Microsoft Excel, make presentations with Micr…

   1. Microsoft Windows is an operating system, which means that it is the basic software that makes people's computers work and lets other programs work. The majority of desktop and laptop computers run...
   2. Microsoft Office is an office suite. It lets people write documents on their computer with Microsoft Word, make charts and graphs with Microsoft Excel, make presentations with Microsoft PowerPoint,...
   3. Internet Explorer is a piece of software that lets people look at things online (known as browsing) and download things from the Internet. In 2015, it was replaced by Microsoft Edge.
   4. Microsoft also makes other programs for the Internet. Many of them are called Windows Live services, with the name Windows Live put in front of the old name of the service, like Window…

   See more![](data:image/png;base64...)

   New content will be added above the current area of focus upon selection

   [See more on simple.wikipedia.org](https://www.bing.com/ck/a?!&&p=6c2eaf6bfc11a875JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE3OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zaW1wbGUud2lraXBlZGlhLm9yZy93aWtpL01pY3Jvc29mdA&ntb=1)

   * **Type:** [Public](https://www.bing.com/ck/a?!&&p=ac9fc59063c47d01JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTMyMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPVB1YmxpYytjb21wYW55K3dpa2lwZWRpYSZGT1JNPUxGQUNUUkU&ntb=1 "Public")
   * **ISIN:** US5949181045
5. People also ask

   What is Microsoft's history?

   Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, followed by Windows.

   ## [Microsoft - Wikipedia](https://www.bing.com/ck/a?!&&p=f55f26ed0851e233JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE5MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1)

   en.wikipedia.org/wiki/Microsoft

   What are Microsoft's main products?

   Its best-known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers.

   ## [Microsoft - Wikipedia](https://www.bing.com/ck/a?!&&p=54e48c78eeb9c42dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjE5Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1)

   en.wikipedia.org/wiki/Microsoft

   What services does Microsoft offer?

   Microsoft offers a variety of services, such as Azure, Bing, LinkedIn, Yammer, MSDN, Microsoft 365, OneDrive, Outlook.com, GitHub, TechNet, Pay, Microsoft Store, Windows Update, Xbox Game Pass and Xbox network. How to write a complaint about Microsoft?

   ## [Microsoft Contact Number, Email, Support, Information](https://www.bing.com/ck/a?!&&p=b5aa51ab9912497eJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjIwMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuY29tcGxhaW50c2JvYXJkLmNvbS9taWNyb3NvZnQtYjEwNzYyOC9jb250YWN0cw&ntb=1)

   www.complaintsboard.com/microsoft-b107628/contacts

   What does Microsoft do?

   Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.

   ## [What does Microsoft mean? - definitions](https://www.bing.com/ck/a?!&&p=96d44e59fbf49f44JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjIwNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuZGVmaW5pdGlvbnMubmV0L2RlZmluaXRpb24vTWljcm9zb2Z0&ntb=1)

   www.definitions.net/definition/Microsoft

   [Feedback](https://www.bing.com/ck/a?!&&p=fc55fd6ea24e559bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjQwNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1amF2YXNjcmlwdDp2b2lkKDAp&ntb=1)
6. [Microsoft

   https://www.microsoft.com/en-us/about](https://www.bing.com/ck/a?!&&p=7da7246a4559ed1aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTM1Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9hYm91dA&ntb=1)

   ## [About Microsoft | Mission and Vision | Microsoft](https://www.bing.com/ck/a?!&&p=7da7246a4559ed1aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTM1Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9hYm91dA&ntb=1)

   WEBOur mission is to empower every person and every organization on the planet to achieve more. Learn more about our company, who we are and what we value.

   [Tags:

   Company Information

   Microsoft Vision Mission Values

   Mission And Vision](https://www.bing.com/ck/a?!&&p=7da7246a4559ed1aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTM1Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9hYm91dA&ntb=1)
7. [Wikipedia

   https://en.wikipedia.org/wiki/Timeline\_of\_Microsoft](https://www.bing.com/ck/a?!&&p=a68dfb7743c48c29JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTM4Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltZWxpbmVfb2ZfTWljcm9zb2Z0&ntb=1)

   ## [Timeline of Microsoft - Wikipedia](https://www.bing.com/ck/a?!&&p=a68dfb7743c48c29JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTM4Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltZWxpbmVfb2ZfTWljcm9zb2Z0&ntb=1)

   WEB**Microsoft** launches the first version of its Windows operating system, Windows 1.0, which runs on top of MS-DOS and had a primitive GUI. 1986: February: Company: **Microsoft** …

   [Tags:

   Bill Gates

   Ms-Dos

   Apple

   Microsoft Excel

   Timeline Of Microsoft](https://www.bing.com/ck/a?!&&p=a68dfb7743c48c29JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTM4Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltZWxpbmVfb2ZfTWljcm9zb2Z0&ntb=1)
8. [Britannica

   https://www.britannica.com/topic/Micr…](https://www.bing.com/ck/a?!&&p=1fc78a7b39d73d7dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQxNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuYnJpdGFubmljYS5jb20vdG9waWMvTWljcm9zb2Z0LUNvcnBvcmF0aW9u&ntb=1)

   ## [Microsoft Corporation | History, Products, & Facts](https://www.bing.com/ck/a?!&&p=1fc78a7b39d73d7dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQxNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuYnJpdGFubmljYS5jb20vdG9waWMvTWljcm9zb2Z0LUNvcnBvcmF0aW9u&ntb=1)

   WEB2 days ago · **Microsoft** Corporation is a leading developer of computer software, operating systems, cloud computing, and artificial intelligence applications. The company also produces its own line of hybrid tablet …

   [Tags:

   Computing

   Developer:Microsoft

   Microsoft History](https://www.bing.com/ck/a?!&&p=1fc78a7b39d73d7dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQxNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuYnJpdGFubmljYS5jb20vdG9waWMvTWljcm9zb2Z0LUNvcnBvcmF0aW9u&ntb=1)
9. [ThoughtCo

   https://www.thoughtco.com/microsoft-…](https://www.bing.com/ck/a?!&&p=d2e78d9f4b711794JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ0Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cudGhvdWdodGNvLmNvbS9taWNyb3NvZnQtaGlzdG9yeS1vZi1hLWNvbXB1dGluZy1naWFudC0xOTkxMTQw&ntb=1)

   ## [A Short History of Microsoft - ThoughtCo](https://www.bing.com/ck/a?!&&p=d2e78d9f4b711794JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ0Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cudGhvdWdodGNvLmNvbS9taWNyb3NvZnQtaGlzdG9yeS1vZi1hLWNvbXB1dGluZy1naWFudC0xOTkxMTQw&ntb=1)

   WEBJan 10, 2020 · Learn how **Microsoft** was founded by two childhood friends and became a global leader in software and hardware. Explore the milestones of **Microsoft** products, from MS-DOS and Windows to Office …

   [Tags:

   Computing

   Microsoft Corporation Founded

   History Of Microsoft](https://www.bing.com/ck/a?!&&p=d2e78d9f4b711794JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ0Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cudGhvdWdodGNvLmNvbS9taWNyb3NvZnQtaGlzdG9yeS1vZi1hLWNvbXB1dGluZy1naWFudC0xOTkxMTQw&ntb=1)
10. [Wikiwand

    https://www.wikiwand.com/en/Microsoft](https://www.bing.com/ck/a?!&&p=a7149d0949b2c952JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ3Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cud2lraXdhbmQuY29tL2VuL01pY3Jvc29mdA&ntb=1)

    ## [Microsoft - Wikiwand](https://www.bing.com/ck/a?!&&p=a7149d0949b2c952JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ3Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cud2lraXdhbmQuY29tL2VuL01pY3Jvc29mdA&ntb=1)

    WEB**Microsoft** Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington. **Microsoft**'s best-known software products are …

    [Tags:

    Wikiwand Download

    Wikis

    Wikiwand Ios

    Wikiwand For Microsoft Edge](https://www.bing.com/ck/a?!&&p=a7149d0949b2c952JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ3Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cud2lraXdhbmQuY29tL2VuL01pY3Jvc29mdA&ntb=1)
11. [Wikipedia

    https://en.wikipedia.org/wiki/Outline\_of\_Microsoft](https://www.bing.com/ck/a?!&&p=1db8674f76c98bc0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ5Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3V0bGluZV9vZl9NaWNyb3NvZnQ&ntb=1)

    ## [Outline of Microsoft - Wikipedia](https://www.bing.com/ck/a?!&&p=1db8674f76c98bc0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ5Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3V0bGluZV9vZl9NaWNyb3NvZnQ&ntb=1)

    WEB**Microsoft** Corporation is a multinational corporation based in Redmond, Washington, USA and founded by Bill Gates and Paul Allen that develops, manufactures, licenses, and …

    [Tags:

    Computing

    Bill Gates

    Paul Allen

    Microsoft Corporation Founded

    Dubai](https://www.bing.com/ck/a?!&&p=1db8674f76c98bc0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTQ5Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3V0bGluZV9vZl9NaWNyb3NvZnQ&ntb=1)
13. [**is** wikipedia **owned by** microsoft](https://www.bing.com/ck/a?!&&p=e349181eef5080b7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI1Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPWlzK3dpa2lwZWRpYStvd25lZCtieSttaWNyb3NvZnQmRk9STT1MR1dRUzE&ntb=1)[**what is owned by** microsoft](https://www.bing.com/ck/a?!&&p=cc0af2721276060aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI1NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPXdoYXQraXMrb3duZWQrYnkrbWljcm9zb2Z0JkZPUk09TEdXUVMy&ntb=1)[microsoft **was founded by bill gates what year**](https://www.bing.com/ck/a?!&&p=528ab32b3a41259fJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI1Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCt3YXMrZm91bmRlZCtieStiaWxsK2dhdGVzK3doYXQreWVhciZGT1JNPUxHV1FTMw&ntb=1)[microsoft **company** wikipedia](https://www.bing.com/ck/a?!&&p=b18048b0b02f84d9JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI1OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCtjb21wYW55K3dpa2lwZWRpYSZGT1JNPUxHV1FTNA&ntb=1)[**who was** microsoft **founded by**](https://www.bing.com/ck/a?!&&p=7957143d34c63c5fJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI2MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPXdobyt3YXMrbWljcm9zb2Z0K2ZvdW5kZWQrYnkmRk9STT1MR1dRUzU&ntb=1)More

    People also search for

    * [**is** wikipedia **owned by** microsoft](https://www.bing.com/ck/a?!&&p=865d655ae1f2d0e9JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjIzNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPWlzK3dpa2lwZWRpYStvd25lZCtieSttaWNyb3NvZnQmRk9STT1RU1JFMQ&ntb=1)
    * [microsoft **was founded by bill gates wh**…](https://www.bing.com/ck/a?!&&p=7a1462c589586cccJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCt3YXMrZm91bmRlZCtieStiaWxsK2dhdGVzK3doYXQreWVhciZGT1JNPVFTUkUz&ntb=1 "microsoft was founded by bill gates what year")
    * [**who was** microsoft **founded by**](https://www.bing.com/ck/a?!&&p=5f07ecde83e837d5JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPXdobyt3YXMrbWljcm9zb2Z0K2ZvdW5kZWQrYnkmRk9STT1RU1JFNQ&ntb=1)
    * [**what is owned by** microsoft](https://www.bing.com/ck/a?!&&p=b7a6a91a6385f0eeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjIzOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPXdoYXQraXMrb3duZWQrYnkrbWljcm9zb2Z0JkZPUk09UVNSRTI&ntb=1)
    * [microsoft **company** wikipedia](https://www.bing.com/ck/a?!&&p=cb81fb59ab5139e8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCtjb21wYW55K3dpa2lwZWRpYSZGT1JNPVFTUkU0&ntb=1)
    * [microsoft wikipedia **history**](https://www.bing.com/ck/a?!&&p=999d92408d433051JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCt3aWtpcGVkaWEraGlzdG9yeSZGT1JNPVFTUkU2&ntb=1)

    ## Related searches for **Microsoft wikipedia**

    * [**is** wikipedia **owned by** microsoft](https://www.bing.com/ck/a?!&&p=865d655ae1f2d0e9JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjIzNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPWlzK3dpa2lwZWRpYStvd25lZCtieSttaWNyb3NvZnQmRk9STT1RU1JFMQ&ntb=1)
    * [**what is owned by** microsoft](https://www.bing.com/ck/a?!&&p=b7a6a91a6385f0eeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjIzOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPXdoYXQraXMrb3duZWQrYnkrbWljcm9zb2Z0JkZPUk09UVNSRTI&ntb=1)
    * [microsoft **was founded by bill gates what year**](https://www.bing.com/ck/a?!&&p=7a1462c589586cccJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCt3YXMrZm91bmRlZCtieStiaWxsK2dhdGVzK3doYXQreWVhciZGT1JNPVFTUkUz&ntb=1)
    * [microsoft **company** wikipedia](https://www.bing.com/ck/a?!&&p=cb81fb59ab5139e8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCtjb21wYW55K3dpa2lwZWRpYSZGT1JNPVFTUkU0&ntb=1)
    * [**who was** microsoft **founded by**](https://www.bing.com/ck/a?!&&p=5f07ecde83e837d5JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPXdobyt3YXMrbWljcm9zb2Z0K2ZvdW5kZWQrYnkmRk9STT1RU1JFNQ&ntb=1)
    * [microsoft wikipedia **history**](https://www.bing.com/ck/a?!&&p=999d92408d433051JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPW1pY3Jvc29mdCt3aWtpcGVkaWEraGlzdG9yeSZGT1JNPVFTUkU2&ntb=1)
    * [**does** microsoft **own** wikipedia](https://www.bing.com/ck/a?!&&p=0a56632c235cfad3JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI0OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPWRvZXMrbWljcm9zb2Z0K293bit3aWtpcGVkaWEmRk9STT1RU1JFNw&ntb=1)
    * [list of microsoft software wikipedia](https://www.bing.com/ck/a?!&&p=f59d6e1ef99b3580JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI1MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9xPWxpc3Qrb2YrbWljcm9zb2Z0K3NvZnR3YXJlK3dpa2lwZWRpYSZGT1JNPVFTUkU4&ntb=1)
14. #### Pagination

    * 1
    * [2](/search?q=Microsoft+wikipedia&FPIG=7DE503E4162940FA9A03BF17C440033D&first=11&FORM=PERE)
    * [3](/search?q=Microsoft+wikipedia&FPIG=7DE503E4162940FA9A03BF17C440033D&first=21&FORM=PERE1)
    * [4](/search?q=Microsoft+wikipedia&FPIG=7DE503E4162940FA9A03BF17C440033D&first=31&FORM=PERE2)
    * [5](/search?q=Microsoft+wikipedia&FPIG=7DE503E4162940FA9A03BF17C440033D&first=41&FORM=PERE3)
    * [Next](/search?q=Microsoft+wikipedia&FPIG=7DE503E4162940FA9A03BF17C440033D&first=11&FORM=PORE "Next page")

![](data:image/svg+xml...)

See more

1. a093e9b9-90f5-a3d5-c4b8-5855e1b01f85

   [![All images](data:image/gif;base64...)](https://www.bing.com/ck/a?!&&p=c2dc1b4f2c0e7d69JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI4Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L2ltYWdlcy9zZWFyY2g_cT1taWNyb3NvZnQmY2JuPUtub3dsZWRnZUNhcmQmc3RpZD1hMDkzZTliOS05MGY1LWEzZDUtYzRiOC01ODU1ZTFiMDFmODUmRk9STT1LQ0hJTU0&ntb=1 "All images")

   [## Microsoft](https://www.bing.com/ck/a?!&&p=91f1c26a7177a653JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI4NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9iaW5nLmNvbS9hbGluay9saW5rP3VybD1odHRwcyUzYSUyZiUyZnd3dy5taWNyb3NvZnQuY29tJTJmZW4tdXMlMmYmc291cmNlPXNlcnAtcnImaD0xbkRRZ0Z4S2JRR1poQm94ZVZicEx1cmh0N1o3TERKdXRTWW13Q2ZkbkxzJTNkJnA9a2NvZmZjaWFsd2Vic2l0ZQ&ntb=1 "bing.com")

   American technology company

   [All images](https://www.bing.com/ck/a?!&&p=882e1be16a8b56e7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI4NQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L2ltYWdlcy9zZWFyY2g_cT1taWNyb3NvZnQmY2JuPUtub3dsZWRnZUNhcmQmc3RpZD1hMDkzZTliOS05MGY1LWEzZDUtYzRiOC01ODU1ZTFiMDFmODUmZGlzb3ZlcmxheT0xJkZPUk09SUFSUlNN&ntb=1 "All images")

   [Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 14 in the 2022 Fortune 500 rankings of the largest United States corporations by total revenue; and it was the world's largest software maker by revenue in 2022 according to Forbes Global 2000. It is considered one of the Big Five American information technology companies, alongside Alphabet, Amazon, Apple, and Meta.](https://www.bing.com/ck/a?!&&p=1fd2d566a62e6224JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWljcm9zb2Z0&ntb=1 "en.wikipedia.org")

   [microsoft.com](https://www.bing.com/ck/a?!&&p=4a16dff37a3de1ccJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9iaW5nLmNvbS9hbGluay9saW5rP3VybD1odHRwcyUzYSUyZiUyZnd3dy5taWNyb3NvZnQuY29tJTJmZW4tdXMlMmYmc291cmNlPXNlcnAtcnImaD0xbkRRZ0Z4S2JRR1poQm94ZVZicEx1cmh0N1o3TERKdXRTWW13Q2ZkbkxzJTNkJnA9a2NvZmZjaWFsd2Vic2l0ZQ&ntb=1)

   [Stock price](https://www.bing.com/ck/a?!&&p=b7dd8fb7999b81afJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5NQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtzdG9jaytwcmljZSZmaWx0ZXJzPXNpZDoiYTA5M2U5YjktOTBmNS1hM2Q1LWM0YjgtNTg1NWUxYjAxZjg1Ig&ntb=1)[MSFT](https://www.bing.com/ck/a?!&&p=6acd955165836a20JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtzdG9jaytwcmljZSZmaWx0ZXJzPXNpZDoiYTA5M2U5YjktOTBmNS1hM2Q1LWM0YjgtNTg1NWUxYjAxZjg1Ig&ntb=1) (NASDAQ) [414.65 USD](https://www.bing.com/ck/a?!&&p=0dabc4d74fd77b9eJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtzdG9jaytwcmljZSZmaWx0ZXJzPXNpZDoiYTA5M2U5YjktOTBmNS1hM2Q1LWM0YjgtNTg1NWUxYjAxZjg1Ig&ntb=1)  -10.57 (-2.49%)

   [Traded as](https://www.bing.com/ck/a?!&&p=6d89b89287b09c09JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCt0cmFkZWQrYXMmZmlsdGVycz1zaWQ6ImEwOTNlOWI5LTkwZjUtYTNkNS1jNGI4LTU4NTVlMWIwMWY4NSI&ntb=1)[Nasdaq](https://www.bing.com/ck/a?!&&p=7829bc23135e17e0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjI5OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU5hc2RhcSZmaWx0ZXJzPXNpZDoiMGMzYjdiMmMtZjQwZS1jYmE4LTNiYjYtMjk0NTA0MjBiMzhlIg&ntb=1): [MSFT](https://www.bing.com/ck/a?!&&p=49425a7ef5de591bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwMA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cubmFzZGFxLmNvbS9tYXJrZXQtYWN0aXZpdHkvc3RvY2tzL21zZnQ&ntb=1) · [Nasdaq-100](https://www.bing.com/ck/a?!&&p=3af5a477ce670683JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU5hc2RhcS0xMDAmZmlsdGVycz1zaWQ6IjJhM2E1MjRhLWE3ODQtZTllYS04ZGRmLTBmYTRmZDg0ODIzMiI&ntb=1) component · [DJIA](https://www.bing.com/ck/a?!&&p=d0c628ccc4f3f709JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwMg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPURKSUEmZmlsdGVycz1zaWQ6IjNmOWNhMzRmLTY0M2QtYjJmYS1lZDdmLTgxMTk5NmQ5MGI5NyI&ntb=1) component · [S&P 100](https://www.bing.com/ck/a?!&&p=20fe61dec9b6d97fJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVMlMjZQKzEwMCZmaWx0ZXJzPXNpZDoiZDM2MTM2YmItNmE0MC00MGQ0LWQwOTQtMGY4NjBmMWY4ODg3Ig&ntb=1) component · [S&P 500](https://www.bing.com/ck/a?!&&p=05123c6561bcdb5eJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwNA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVMlMjZQKzUwMCZmaWx0ZXJzPXNpZDoiNGVmMDk0NmQtMzFiNy0zMDRlLTQxMGEtNGJlZjE3ZjlmZDA1Ig&ntb=1) component

   [Founded](https://www.bing.com/ck/a?!&&p=f067e0d59a812b6eJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwNQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtmb3VuZGVkJmZpbHRlcnM9c2lkOiJhMDkzZTliOS05MGY1LWEzZDUtYzRiOC01ODU1ZTFiMDFmODUi&ntb=1)April 4, 1975 in [Albuquerque, New Mexico](https://www.bing.com/ck/a?!&&p=0aecbfbecfc5e5afJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPUFsYnVxdWVycXVlJTJjK05ldytNZXhpY28mZmlsdGVycz1zaWQ6IjdmZmZhYWY2LWU2OTQtNDA5NS1iZTkwLWY2NDkyY2FkYmQ1OCI&ntb=1), U.S.

   [Founders](https://www.bing.com/ck/a?!&&p=fa2978c6ecc05f1fJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtmb3VuZGVycyZmaWx0ZXJzPXNpZDoiYTA5M2U5YjktOTBmNS1hM2Q1LWM0YjgtNTg1NWUxYjAxZjg1Ig&ntb=1)[Bill Gates](https://www.bing.com/ck/a?!&&p=3c8adc6d6077bc04JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPUJpbGwrR2F0ZXMmZmlsdGVycz1zaWQ6IjBkNDdjOTg3LTAwNDItNTU3Ni0xNWU4LTk3YWY2MDE2MTRmYSI&ntb=1) · [Paul Allen](https://www.bing.com/ck/a?!&&p=f28166440d37bc70JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMwOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVBhdWwrQWxsZW4mZmlsdGVycz1zaWQ6ImRmMmM0Mzc2LTk5MjMtNmE1NC04OTNmLTJlZTVhNWJhZGJjNyI&ntb=1)

   [Headquarters](https://www.bing.com/ck/a?!&&p=f7ba0bd29da09e64JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxMA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtoZWFkcXVhcnRlcnMmZmlsdGVycz1zaWQ6ImEwOTNlOWI5LTkwZjUtYTNkNS1jNGI4LTU4NTVlMWIwMWY4NSI&ntb=1)[One Microsoft Way](https://www.bing.com/ck/a?!&&p=faa9491cfd721b2aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT25lX01pY3Jvc29mdF9XYXk&ntb=1) · [Redmond, Washington](https://www.bing.com/ck/a?!&&p=5f6496dd7088a5d7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxMg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVJlZG1vbmQlMmMrV2FzaGluZ3RvbiZmaWx0ZXJzPXNpZDoiODc2OWQ0YzAtYjY0NS03MGFjLTAzZWMtNmVlYmFiZjZkMjZlIg&ntb=1) · U.S.

   [Key people](https://www.bing.com/ck/a?!&&p=a1e3204949c25f06JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtrZXkrcGVvcGxlJmZpbHRlcnM9c2lkOiJhMDkzZTliOS05MGY1LWEzZDUtYzRiOC01ODU1ZTFiMDFmODUi&ntb=1)[Satya Nadella](https://www.bing.com/ck/a?!&&p=c2c5fe9b3527b6f0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxNA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVNhdHlhK05hZGVsbGEmZmlsdGVycz1zaWQ6ImUyM2U1MWVkLWQxNmYtNDgwMC05YTMxLWVkMDU2MTY4YjlhMiI&ntb=1) ([Chairman](https://www.bing.com/ck/a?!&&p=d60a79807b37178bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxNQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2hhaXJtYW4&ntb=1) & [CEO](https://www.bing.com/ck/a?!&&p=e566d2255ea58402JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPUNFTyZmaWx0ZXJzPXNpZDoiY2Y1ZGI4NjAtOWZkMi0zOTBkLTBiNmQtNWJhODU2ZWZlZDQ5Ig&ntb=1)) · [Brad Smith](https://www.bing.com/ck/a?!&&p=cb921f103bc71d16JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPUJyYWQrU21pdGgmZmlsdGVycz1zaWQ6IjdhMmIwZmNlLWUwYWMtNjI0Ny1kMmQzLTgwNzUwMjkwZTgwNyI&ntb=1) ([Vice Chairman](https://www.bing.com/ck/a?!&&p=4e738cda1110ce23JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVmljZS1DaGFpcm1hbg&ntb=1) & [President](https://www.bing.com/ck/a?!&&p=c9ab20d4e9018ac7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMxOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVByZXNpZGVudCZmaWx0ZXJzPXNpZDoiM2I5MzA1Y2QtMjA3Ni00YmM4LThiMWMtMWEwMTQzM2Q3MWE4Ig&ntb=1)) · Bill Gates ([technical adviser](https://www.bing.com/ck/a?!&&p=fbb94a55ca298feeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyMA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPXRlY2huaWNhbCthZHZpc2VyJmZpbHRlcnM9c2lkOiJhYzEzZDc5Yy03NTY5LTIzMjEtNDU1ZS0xYzZmNzJhMmY1YTQi&ntb=1))

   [Number of employees](https://www.bing.com/ck/a?!&&p=a848802dc5cbfca0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtudW1iZXIrb2YrZW1wbG95ZWVzJmZpbHRlcnM9c2lkOiJhMDkzZTliOS05MGY1LWEzZDUtYzRiOC01ODU1ZTFiMDFmODUi&ntb=1)221,000 (2023)

   [Subsidiaries](https://www.bing.com/ck/a?!&&p=35afc2de40e00a18JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyMg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtzdWJzaWRpYXJpZXMmZmlsdGVycz1zaWQ6ImEwOTNlOWI5LTkwZjUtYTNkNS1jNGI4LTU4NTVlMWIwMWY4NSI&ntb=1)[Microsoft Japan](https://www.bing.com/ck/a?!&&p=d101b2f10184e7c0JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtKYXBhbiZmaWx0ZXJzPXNpZDoiMzZlNmY4NzctZmUxNy05MjFiLTQ4OGYtMTM0OTJjZjY3Y2E3Ig&ntb=1) · [Microsoft India](https://www.bing.com/ck/a?!&&p=7b933687f4682f63JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyNA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtJbmRpYSZmaWx0ZXJzPXNpZDoiM2E0NTY3ZjItMGY1NS0wMTU4LWQwMzgtNGMzMDkwYmQ2MzM2Ig&ntb=1) · [Microsoft Egypt](https://www.bing.com/ck/a?!&&p=9b732bc5a2d39c1dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyNQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1pY3Jvc29mdCtFZ3lwdCZmaWx0ZXJzPXNpZDoiODczMjg3NjAtYzEwZS00MmViLTQ4ZTctYjRkNTY3ZjgwOTk0Ig&ntb=1) · [GitHub](https://www.bing.com/ck/a?!&&p=5d01cc90b415b224JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPUdpdEh1YiZmaWx0ZXJzPXNpZDoiODUyOGUwMmYtNDc3NC1hOGQ0LWI3NTMtYjJmNzg3MjBjYmEzIg&ntb=1) · [LinkedIn](https://www.bing.com/ck/a?!&&p=46633130430f1658JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPUxpbmtlZEluJmZpbHRlcnM9c2lkOiI0MDFlMjliNy1lNTY0LTdkMGEtNjlkZC00YWVmZjIzYzE5OGQi&ntb=1) · [Metaswitch](https://www.bing.com/ck/a?!&&p=5c31c4a7061edba6JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU1ldGFzd2l0Y2gmZmlsdGVycz1zaWQ6Ijg2ZjdmNGU1LTJhZjAtZmMyMy00NjEyLWZjNTMwODdhZjllNCI&ntb=1) · [Nuance Communications](https://www.bing.com/ck/a?!&&p=8c09421385611f6cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMyOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPU51YW5jZStDb21tdW5pY2F0aW9ucyZmaWx0ZXJzPXNpZDoiMzE3ZDVlMmYtMzhiZS1jYTlhLWU1YjQtMzc3YzQ3YjEyYTY4Ig&ntb=1) · [RiskIQ](https://www.bing.com/ck/a?!&&p=d439bbc00b8c3f9bJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzMA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVJpc2tJUSZmaWx0ZXJzPXNpZDoiMDdjOWMwMTYtNTczNC0yZDkwLTA3NWYtNjdmOWYzZTZiZjhhIg&ntb=1) · [Skype Technologies](https://www.bing.com/ck/a?!&&p=18bc8fbde47eb029JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzMQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVNreXBlK1RlY2hub2xvZ2llcyZmaWx0ZXJzPXNpZDoiNzhkMDFmNTAtMDI0OS02OGYxLTFmNDgtOTRlMmQ4ZWNjOGI0Ig&ntb=1) · [Xamarin](https://www.bing.com/ck/a?!&&p=4c76b1275b1b5333JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzMg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVhhbWFyaW4mZmlsdGVycz1zaWQ6IjhiMjQ5MTAzLWI2YjYtMDEwNC1jNjY5LTYxYTlhNjJhNDEwZSI&ntb=1) · [Xandr](https://www.bing.com/ck/a?!&&p=40cb76b3b8d59bdbJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzMw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPVhhbmRyJmZpbHRlcnM9c2lkOiI5NGMxNGQ1Mi1kYjI4LTMzNGYtZGY2NS05ZTY4YWZjM2U2N2Ei&ntb=1)

   [### Explore more](https://www.bing.com/ck/a?!&&p=381d5bc5e346ab63JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzNA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPUtDRVhQTCZxPW1pY3Jvc29mdCthY2NvdW50JmZpbHRlcnM9c2lkOiIyZTY1MmQwOC00YmM4LTk1MTQtZmIwOC0yMTBjYmZkZjM5NmIiK2xpdGU6Ii5TMk5rVW1Wc1lYUnBiMjVlWVRBNU0yVTVZamt0T1RCbU5TMWhNMlExTFdNMFlqZ3ROVGcxTldVeFlqQXhaamcxWGw1ZVhpUkZiblJwZEhreVgyVnUi&ntb=1)

   * [Microsoft account](https://www.bing.com/ck/a?!&&p=e667e6c05ccc4a2cJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzNQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPUtDRVhQTCZxPW1pY3Jvc29mdCthY2NvdW50JmZpbHRlcnM9c2lkOiIyZTY1MmQwOC00YmM4LTk1MTQtZmIwOC0yMTBjYmZkZjM5NmIiK2xpdGU6Ii5TMk5rVW1Wc1lYUnBiMjVlWVRBNU0yVTVZamt0T1RCbU5TMWhNMlExTFdNMFlqZ3ROVGcxTldVeFlqQXhaamcxWGw1ZVhpUkZiblJwZEhreVgyVnUi&ntb=1)
   * [Hewlett-Packard](https://www.bing.com/ck/a?!&&p=42b0eb2c0462b396JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzNg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPUtDRVhQTCZxPUhld2xldHQtUGFja2FyZCZmaWx0ZXJzPXNpZDoiNWIxYzY5OWYtZjJiZi0xNmU4LWMxOTMtM2Q0ZmFiOGI0ZTk2IitsaXRlOiIuUzJOa1VtVnNZWFJwYjI1ZVlUQTVNMlU1WWprdE9UQm1OUzFoTTJRMUxXTTBZamd0TlRnMU5XVXhZakF4WmpnMVhsNWVYaVJGYm5ScGRIa3lYMlZ1Ig&ntb=1)
   * [Intel](https://www.bing.com/ck/a?!&&p=a0d29baadabd4df4JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzNw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPUtDRVhQTCZxPUludGVsJmZpbHRlcnM9c2lkOiI3YmZlZjFjMS01ZmYxLWY5ODItYmVjMC0xYjkzMDIyMjE0OGMiK2xpdGU6Ii5TMk5rVW1Wc1lYUnBiMjVlWVRBNU0yVTVZamt0T1RCbU5TMWhNMlExTFdNMFlqZ3ROVGcxTldVeFlqQXhaamcxWGw1ZVhpUkZiblJwZEhreVgyVnUi&ntb=1)
   * [Nokia](https://www.bing.com/ck/a?!&&p=a47d7e2bbc768743JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzOA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPUtDRVhQTCZxPU5va2lhJmZpbHRlcnM9c2lkOiI0Yjc4MjU1Yi03ZGU2LTExMGItNjM5NC05YTAzNDk3ZmRiMDciK2xpdGU6Ii5TMk5rVW1Wc1lYUnBiMjVlWVRBNU0yVTVZamt0T1RCbU5TMWhNMlExTFdNMFlqZ3ROVGcxTldVeFlqQXhaamcxWGw1ZVhpUkZiblJwZEhreVgyVnUi&ntb=1)
   * [Bilibili](https://www.bing.com/ck/a?!&&p=8617b6a5917f931aJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjMzOQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPUtDRVhQTCZxPUJpbGliaWxpJmZpbHRlcnM9c2lkOiIzMDcyMzM0Ni0yNmQ1LTUzZWItMjJlMy0zOTg3OWFlODQyMzMiK2xpdGU6Ii5TMk5rVW1Wc1lYUnBiMjVlWVRBNU0yVTVZamt0T1RCbU5TMWhNMlExTFdNMFlqZ3ROVGcxTldVeFlqQXhaamcxWGw1ZVhpUkZiblJwZEhreVgyVnUi&ntb=1)

   Image: [Getty Images](https://www.bing.com/ck/a?!&&p=ff8d7a6fce1523ecJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tLw&ntb=1 "gettyimages.com"). Data: [Wikipedia](https://www.bing.com/ck/a?!&&p=c3e07e043df1a043JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3Jn&ntb=1 "en.wikipedia.org") · [microsoft.com](https://www.bing.com/ck/a?!&&p=6dfc7052e9b3eeb5JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9hYm91dA&ntb=1 "microsoft.com") · [startuptalky.com](https://www.bing.com/ck/a?!&&p=0788be69c8000aa8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0Mw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zdGFydHVwdGFsa3kuY29t&ntb=1 "startuptalky.com") · [companieshistory.com](https://www.bing.com/ck/a?!&&p=5dd81c4d3eb2c1f8JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuY29tcGFuaWVzaGlzdG9yeS5jb20&ntb=1 "companieshistory.com") · [thefactsite.com](https://www.bing.com/ck/a?!&&p=8db65c22f58bd6dbJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0NQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cudGhlZmFjdHNpdGUuY29t&ntb=1 "thefactsite.com") · [tech25s.com](https://www.bing.com/ck/a?!&&p=31f294a67ae8ae7dJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0Ng&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly90ZWNoMjVzLmNvbQ&ntb=1 "tech25s.com") · [businessinsider.in](https://www.bing.com/ck/a?!&&p=7acf704217a7d4c7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0Nw&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly93d3cuYnVzaW5lc3NpbnNpZGVyLmluI3NsaWRlaWQ9NTEzODQ3OTQ&ntb=1 "businessinsider.in")
   Wikipedia text under [CC-BY-SA license](https://www.bing.com/ck/a?!&&p=85ee3e04374198bdJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC8&ntb=1 "creativecommons.org")

   Feedback

   Thanks!Tell us more

   [See more](https://www.bing.com/ck/a?!&&p=b883411d22348d16JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NjM0OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&u=a1L3NlYXJjaD9GT1JNPVNOQVBTVCZxPW1pY3Jvc29mdCt3aWtpcGVkaWEmZmlsdGVycz1zaWQ6ImEwOTNlOWI5LTkwZjUtYTNkNS1jNGI4LTU4NTVlMWIwMWY4NSI&ntb=1)

© 2024 Microsoft

* [Privacy and Cookies](https://www.bing.com/ck/a?!&&p=9f34e540fac56fbeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA3OA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cDovL2dvLm1pY3Jvc29mdC5jb20vZndsaW5rLz9MaW5rSWQ9NTIxODM5&ntb=1)
* [Legal](https://www.bing.com/ck/a?!&&p=6990dd9e25408afeJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA3OQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cDovL2dvLm1pY3Jvc29mdC5jb20vZndsaW5rLz9MaW5rSUQ9MjQ2MzM4&ntb=1)
* [Advertise](https://www.bing.com/ck/a?!&&p=6535ccb1f8040198JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA4MA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9nby5taWNyb3NvZnQuY29tL2Z3bGluay8_bGlua2lkPTg2ODkyMg&ntb=1)
* [About our ads](https://www.bing.com/ck/a?!&&p=4360062a3a0c1c86JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA4MQ&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cDovL2dvLm1pY3Jvc29mdC5jb20vZndsaW5rLz9MaW5rSUQ9Mjg2NzU5&ntb=1)
* [Help](https://www.bing.com/ck/a?!&&p=764628906be02aa7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA4Mg&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9zdXBwb3J0Lm1pY3Jvc29mdC5jb20vdG9waWMvODJkMjA3MjEtMmQ2Zi00MDEyLWExM2QtZDE5MTBjY2YyMDNm&ntb=1)
* Feedback
* [Your Privacy Choices](https://www.bing.com/ck/a?!&&p=f9280d124b3869b7JmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0xNWViYmNjMy05YmU3LTY3NTYtMzRhNC1hODgwOWE1ZDY2MTcmaW5zaWQ9NTA4NA&ptn=3&ver=2&hsh=3&fclid=15ebbcc3-9be7-6756-34a4-a8809a5d6617&psq=Microsoft+wikipedia&u=a1aHR0cHM6Ly9nby5taWNyb3NvZnQuY29tL2Z3bGluay8_bGlua2lkPTIyMTQ4MDI&ntb=1)

[All](/search?q=Microsoft+wikipedia&FORM=000017&qpvt=Microsoft+wikipedia)[Past 24 hours](/search?q=Microsoft+wikipedia&filters=ex1%3a%22ez1%22&FORM=000017&qpvt=Microsoft+wikipedia)[Past week](/search?q=Microsoft+wikipedia&filters=ex1%3a%22ez2%22&FORM=000017&qpvt=Microsoft+wikipedia)[Past month](/search?q=Microsoft+wikipedia&filters=ex1%3a%22ez3%22&FORM=000017&qpvt=Microsoft+wikipedia)[Past year](/search?q=Microsoft+wikipedia&filters=ex1%3a%22ez5_19432_19797%22&FORM=000017)

## File: test_wikipedia.html

[Jump to content](#bodyContent)

Main menu

Main menu

move to sidebar
hide

Navigation

* [Main page](/wiki/Main_Page "Visit the main page [z]")
* [Contents](/wiki/Wikipedia%3AContents "Guides to browsing Wikipedia")
* [Current events](/wiki/Portal%3ACurrent_events "Articles related to current events")
* [Random article](/wiki/Special%3ARandom "Visit a randomly selected article [x]")
* [About Wikipedia](/wiki/Wikipedia%3AAbout "Learn about Wikipedia and how it works")
* [Contact us](//en.wikipedia.org/wiki/Wikipedia%3AContact_us "How to contact Wikipedia")
* [Donate](https://donate.wikimedia.org/wiki/Special%3AFundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_en.wikipedia.org&uselang=en "Support us by donating to the Wikimedia Foundation")

Contribute

* [Help](/wiki/Help%3AContents "Guidance on how to use and edit Wikipedia")
* [Learn to edit](/wiki/Help%3AIntroduction "Learn how to edit Wikipedia")
* [Community portal](/wiki/Wikipedia%3ACommunity_portal "The hub for editors")
* [Recent changes](/wiki/Special%3ARecentChanges "A list of recent changes to Wikipedia [r]")
* [Upload file](/wiki/Wikipedia%3AFile_upload_wizard "Add images or other media for use on Wikipedia")

[![](/static/images/icons/wikipedia.png)

![Wikipedia](/static/images/mobile/copyright/wikipedia-wordmark-en.svg)
![The Free Encyclopedia](/static/images/mobile/copyright/wikipedia-tagline-en.svg)](/wiki/Main_Page)

[Search](/wiki/Special%3ASearch "Search Wikipedia [f]")

Search

* [Create account](/w/index.php?title=Special:CreateAccount&returnto=Microsoft "You are encouraged to create an account and log in; however, it is not mandatory")
* [Log in](/w/index.php?title=Special:UserLogin&returnto=Microsoft "You're encouraged to log in; however, it's not mandatory. [o]")

Personal tools

* [Create account](/w/index.php?title=Special:CreateAccount&returnto=Microsoft "You are encouraged to create an account and log in; however, it is not mandatory")
* [Log in](/w/index.php?title=Special:UserLogin&returnto=Microsoft "You're encouraged to log in; however, it's not mandatory. [o]")

Pages for logged out editors [learn more](/wiki/Help%3AIntroduction)

* [Contributions](/wiki/Special%3AMyContributions "A list of edits made from this IP address [y]")
* [Talk](/wiki/Special%3AMyTalk "Discussion about edits from this IP address [n]")

## Contents

move to sidebar
hide

* (Top)
* [1History](#History)

  Toggle History subsection
  + [1.11972–1985: Founding](#1972–1985:_Founding)
  + [1.21985–1994: Windows and Office](#1985–1994:_Windows_and_Office)
  + [1.31995–2007: Foray into the Web, Windows 95, Windows XP, and Xbox](#1995–2007:_Foray_into_the_Web,_Windows_95,_Windows_XP,_and_Xbox)
  + [1.42007–2011: Microsoft Azure, Windows Vista, Windows 7, and Microsoft Stores](#2007–2011:_Microsoft_Azure,_Windows_Vista,_Windows_7,_and_Microsoft_Stores)
  + [1.52011–2014: Windows 8/8.1, Xbox One, Outlook.com, and Surface devices](#2011–2014:_Windows_8/8.1,_Xbox_One,_Outlook.com,_and_Surface_devices)
  + [1.62014–2020: Windows 10, Microsoft Edge, and HoloLens](#2014–2020:_Windows_10,_Microsoft_Edge,_and_HoloLens)
  + [1.72020–present: Acquisitions, Xbox Series X/S, and Windows 11](#2020–present:_Acquisitions,_Xbox_Series_X/S,_and_Windows_11)
* [2Corporate affairs](#Corporate_affairs)

  Toggle Corporate affairs subsection
  + [2.1Board of directors](#Board_of_directors)
  + [2.2Chief executives](#Chief_executives)
  + [2.3Financial](#Financial)
  + [2.4Subsidiaries](#Subsidiaries)
  + [2.5Ownership](#Ownership)
  + [2.6Marketing](#Marketing)
  + [2.7Layoffs](#Layoffs)
  + [2.8United States government](#United_States_government)
  + [2.9Security challenges](#Security_challenges)
* [3Corporate identity](#Corporate_identity)

  Toggle Corporate identity subsection
  + [3.1Corporate culture](#Corporate_culture)
  + [3.2Environment](#Environment)
  + [3.3Headquarters](#Headquarters)
  + [3.4Flagship stores](#Flagship_stores)
  + [3.5Logo](#Logo)
  + [3.6Sponsorship](#Sponsorship)
  + [3.7Philanthropy](#Philanthropy)
  + [3.8Controversies](#Controversies)
* [4See also](#See_also)
* [5References](#References)
* [6External links](#External_links)

Toggle the table of contents

# Microsoft

154 languages

* [Afrikaans](https://af.wikipedia.org/wiki/Microsoft "Microsoft – Afrikaans")
* [Alemannisch](https://als.wikipedia.org/wiki/Microsoft "Microsoft – Alemannic")
* [አማርኛ](https://am.wikipedia.org/wiki/%E1%88%9B%E1%8B%AD%E1%8A%AD%E1%88%AE%E1%88%B6%E1%8D%8D%E1%89%B5 "ማይክሮሶፍት – Amharic")
* [Ænglisc](https://ang.wikipedia.org/wiki/Microsoft "Microsoft – Old English")
* [العربية](https://ar.wikipedia.org/wiki/%D9%85%D8%A7%D9%8A%D9%83%D8%B1%D9%88%D8%B3%D9%88%D9%81%D8%AA "مايكروسوفت – Arabic")
* [Aragonés](https://an.wikipedia.org/wiki/Microsoft "Microsoft – Aragonese")
* [Asturianu](https://ast.wikipedia.org/wiki/Microsoft "Microsoft – Asturian")
* [Azərbaycanca](https://az.wikipedia.org/wiki/Microsoft "Microsoft – Azerbaijani")
* [تۆرکجه](https://azb.wikipedia.org/wiki/%D9%85%D8%A7%DB%8C%DA%A9%D8%B1%D9%88%D8%B3%D8%A7%D9%81%D8%AA "مایکروسافت – South Azerbaijani")
* [বাংলা](https://bn.wikipedia.org/wiki/%E0%A6%AE%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%B8%E0%A6%AB%E0%A6%9F_%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8 "মাইক্রোসফট কর্পোরেশন – Bangla")
* [Bân-lâm-gú](https://zh-min-nan.wikipedia.org/wiki/Microsoft "Microsoft – Minnan")
* [Basa Banyumasan](https://map-bms.wikipedia.org/wiki/Microsoft_Corporation "Microsoft Corporation – Basa Banyumasan")
* [Башҡортса](https://ba.wikipedia.org/wiki/Microsoft "Microsoft – Bashkir")
* [Беларуская](https://be.wikipedia.org/wiki/Microsoft "Microsoft – Belarusian")
* [Беларуская (тарашкевіца)](https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B9%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%84%D1%82 "Майкрасофт – Belarusian (Taraškievica orthography)")
* [भोजपुरी](https://bh.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A4%BE%E0%A4%AB%E0%A5%8D%E0%A4%9F "माइक्रोसाफ्ट – Bhojpuri")
* [Български](https://bg.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B9%D0%BA%D1%80%D0%BE%D1%81%D0%BE%D1%84%D1%82 "Майкрософт – Bulgarian")
* [Boarisch](https://bar.wikipedia.org/wiki/Microsoft "Microsoft – Bavarian")
* [Bosanski](https://bs.wikipedia.org/wiki/Microsoft "Microsoft – Bosnian")
* [Brezhoneg](https://br.wikipedia.org/wiki/Microsoft "Microsoft – Breton")
* [Català](https://ca.wikipedia.org/wiki/Microsoft "Microsoft – Catalan")
* [Cebuano](https://ceb.wikipedia.org/wiki/Microsoft "Microsoft – Cebuano")
* [Čeština](https://cs.wikipedia.org/wiki/Microsoft "Microsoft – Czech")
* [Cymraeg](https://cy.wikipedia.org/wiki/Microsoft "Microsoft – Welsh")
* [Dansk](https://da.wikipedia.org/wiki/Microsoft "Microsoft – Danish")
* [الدارجة](https://ary.wikipedia.org/wiki/%D9%85%D8%A7%D9%8A%D9%83%D8%B1%D9%88%D8%B5%D9%88%D9%81%D8%AA "مايكروصوفت – Moroccan Arabic")
* [Deutsch](https://de.wikipedia.org/wiki/Microsoft "Microsoft – German")
* [ދިވެހިބަސް](https://dv.wikipedia.org/wiki/%DE%89%DE%A6%DE%87%DE%A8%DE%86%DE%B0%DE%83%DE%AF%DE%90%DE%AE%DE%8A%DE%B0%DE%93%DE%B0 "މައިކްރޯސޮފްޓް – Divehi")
* [Eesti](https://et.wikipedia.org/wiki/Microsoft "Microsoft – Estonian")
* [Ελληνικά](https://el.wikipedia.org/wiki/Microsoft "Microsoft – Greek")
* [Español](https://es.wikipedia.org/wiki/Microsoft "Microsoft – Spanish")
* [Esperanto](https://eo.wikipedia.org/wiki/Microsoft "Microsoft – Esperanto")
* [Estremeñu](https://ext.wikipedia.org/wiki/Microsoft "Microsoft – Extremaduran")
* [Euskara](https://eu.wikipedia.org/wiki/Microsoft "Microsoft – Basque")
* [فارسی](https://fa.wikipedia.org/wiki/%D9%85%D8%A7%DB%8C%DA%A9%D8%B1%D9%88%D8%B3%D8%A7%D9%81%D8%AA "مایکروسافت – Persian")
* [Français](https://fr.wikipedia.org/wiki/Microsoft "Microsoft – French")
* [Frysk](https://fy.wikipedia.org/wiki/Microsoft "Microsoft – Western Frisian")
* [Gaeilge](https://ga.wikipedia.org/wiki/Microsoft "Microsoft – Irish")
* [Galego](https://gl.wikipedia.org/wiki/Microsoft "Microsoft – Galician")
* [贛語](https://gan.wikipedia.org/wiki/%E5%BE%AE%E8%BB%9F "微軟 – Gan")
* [Gĩkũyũ](https://ki.wikipedia.org/wiki/Microsoft "Microsoft – Kikuyu")
* [ગુજરાતી](https://gu.wikipedia.org/wiki/%E0%AA%AE%E0%AA%BE%E0%AA%87%E0%AA%95%E0%AB%8D%E0%AA%B0%E0%AB%8B%E0%AA%B8%E0%AB%8B%E0%AA%AB%E0%AB%8D%E0%AA%9F "માઇક્રોસોફ્ટ – Gujarati")
* [客家語/Hak-kâ-ngî](https://hak.wikipedia.org/wiki/Microsoft "Microsoft – Hakka Chinese")
* [한국어](https://ko.wikipedia.org/wiki/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%86%8C%ED%94%84%ED%8A%B8 "마이크로소프트 – Korean")
* [Hausa](https://ha.wikipedia.org/wiki/Microsoft "Microsoft – Hausa")
* [Հայերեն](https://hy.wikipedia.org/wiki/%D5%84%D5%A1%D5%B5%D6%84%D6%80%D5%B8%D5%BD%D5%B8%D6%86%D5%A9 "Մայքրոսոֆթ – Armenian")
* [हिन्दी](https://hi.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A5%89%E0%A4%AB%E0%A4%BC%E0%A5%8D%E0%A4%9F "माइक्रोसॉफ़्ट – Hindi")
* [Hrvatski](https://hr.wikipedia.org/wiki/Microsoft "Microsoft – Croatian")
* [Ido](https://io.wikipedia.org/wiki/Microsoft "Microsoft – Ido")
* [Ilokano](https://ilo.wikipedia.org/wiki/Microsoft "Microsoft – Iloko")
* [Bahasa Indonesia](https://id.wikipedia.org/wiki/Microsoft "Microsoft – Indonesian")
* [Interlingua](https://ia.wikipedia.org/wiki/Microsoft_Corporation "Microsoft Corporation – Interlingua")
* [Íslenska](https://is.wikipedia.org/wiki/Microsoft "Microsoft – Icelandic")
* [Italiano](https://it.wikipedia.org/wiki/Microsoft "Microsoft – Italian")
* [עברית](https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%A7%D7%A8%D7%95%D7%A1%D7%95%D7%A4%D7%98 "מיקרוסופט – Hebrew")
* [Jawa](https://jv.wikipedia.org/wiki/Microsoft "Microsoft – Javanese")
* [ಕನ್ನಡ](https://kn.wikipedia.org/wiki/%E0%B2%AE%E0%B3%88%E0%B2%95%E0%B3%8D%E0%B2%B0%E0%B3%8B%E0%B2%B8%E0%B2%BE%E0%B2%AB%E0%B3%8D%E0%B2%9F%E0%B3%8D "ಮೈಕ್ರೋಸಾಫ್ಟ್ – Kannada")
* [ქართული](https://ka.wikipedia.org/wiki/Microsoft "Microsoft – Georgian")
* [Қазақша](https://kk.wikipedia.org/wiki/Microsoft "Microsoft – Kazakh")
* [Kiswahili](https://sw.wikipedia.org/wiki/Microsoft "Microsoft – Swahili")
* [Kreyòl ayisyen](https://ht.wikipedia.org/wiki/Microsoft "Microsoft – Haitian Creole")
* [Kurdî](https://ku.wikipedia.org/wiki/Microsoft "Microsoft – Kurdish")
* [Кыргызча](https://ky.wikipedia.org/wiki/Microsoft "Microsoft – Kyrgyz")
* [ລາວ](https://lo.wikipedia.org/wiki/%E0%BB%84%E0%BA%A1%E0%BB%82%E0%BA%84%E0%BA%A3%E0%BA%8A%E0%BA%AD%E0%BA%9A "ໄມໂຄຣຊອບ – Lao")
* [Latina](https://la.wikipedia.org/wiki/Microsoft "Microsoft – Latin")
* [Latviešu](https://lv.wikipedia.org/wiki/Microsoft "Microsoft – Latvian")
* [Lietuvių](https://lt.wikipedia.org/wiki/Microsoft "Microsoft – Lithuanian")
* [Ligure](https://lij.wikipedia.org/wiki/Microsoft "Microsoft – Ligurian")
* [Lingála](https://ln.wikipedia.org/wiki/Microsoft "Microsoft – Lingala")
* [La .lojban.](https://jbo.wikipedia.org/wiki/maikrosaft "maikrosaft – Lojban")
* [Lombard](https://lmo.wikipedia.org/wiki/Microsoft "Microsoft – Lombard")
* [Magyar](https://hu.wikipedia.org/wiki/Microsoft "Microsoft – Hungarian")
* [मैथिली](https://mai.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A4%AB%E0%A5%8D%E0%A4%9F "माइक्रोसफ्ट – Maithili")
* [Македонски](https://mk.wikipedia.org/wiki/Microsoft "Microsoft – Macedonian")
* [മലയാളം](https://ml.wikipedia.org/wiki/%E0%B4%AE%E0%B5%88%E0%B4%95%E0%B5%8D%E0%B4%B0%E0%B5%8B%E0%B4%B8%E0%B5%8B%E0%B4%AB%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D "മൈക്രോസോഫ്റ്റ് – Malayalam")
* [Malti](https://mt.wikipedia.org/wiki/Microsoft "Microsoft – Maltese")
* [Māori](https://mi.wikipedia.org/wiki/Microsoft "Microsoft – Māori")
* [मराठी](https://mr.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A5%89%E0%A4%AB%E0%A5%8D%E0%A4%9F_%E0%A4%95%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%B6%E0%A4%A8 "मायक्रोसॉफ्ट कॉर्पोरेशन – Marathi")
* [მარგალური](https://xmf.wikipedia.org/wiki/Microsoft "Microsoft – Mingrelian")
* [مصرى](https://arz.wikipedia.org/wiki/%D9%85%D8%A7%D9%8A%D9%83%D8%B1%D9%88%D8%B3%D9%88%D9%81%D8%AA "مايكروسوفت – Egyptian Arabic")
* [ဘာသာမန်](https://mnw.wikipedia.org/wiki/Microsoft "Microsoft – Mon")
* [Bahasa Melayu](https://ms.wikipedia.org/wiki/Microsoft "Microsoft – Malay")
* [Minangkabau](https://min.wikipedia.org/wiki/Microsoft "Microsoft – Minangkabau")
* [閩東語 / Mìng-dĕ̤ng-ngṳ̄](https://cdo.wikipedia.org/wiki/M%C3%AC-ni%C5%8Dng "Mì-niōng – Mindong")
* [Монгол](https://mn.wikipedia.org/wiki/Microsoft "Microsoft – Mongolian")
* [မြန်မာဘာသာ](https://my.wikipedia.org/wiki/%E1%80%99%E1%80%AD%E1%80%AF%E1%80%80%E1%80%BA%E1%80%81%E1%80%9B%E1%80%AD%E1%80%AF%E1%80%86%E1%80%B1%E1%80%AC%E1%80%B7%E1%80%96%E1%80%BA "မိုက်ခရိုဆော့ဖ် – Burmese")
* [Na Vosa Vakaviti](https://fj.wikipedia.org/wiki/Na_Microsoft "Na Microsoft – Fijian")
* [Nederlands](https://nl.wikipedia.org/wiki/Microsoft "Microsoft – Dutch")
* [नेपाली](https://ne.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A4%AB%E0%A5%8D%E0%A4%9F "माइक्रोसफ्ट – Nepali")
* [नेपाल भाषा](https://new.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A4%AB%E0%A5%8D%E0%A4%9F "माइक्रोसफ्ट – Newari")
* [日本語](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%BD%E3%83%95%E3%83%88 "マイクロソフト – Japanese")
* [ߒߞߏ](https://nqo.wikipedia.org/wiki/%DF%A1%DF%8C%DF%9E%DF%99%DF%8F%DF%9B%DF%90%DF%9D%DF%95 "ߡߌߞߙߏߛߐߝߕ – N’Ko")
* [Norsk bokmål](https://no.wikipedia.org/wiki/Microsoft "Microsoft – Norwegian Bokmål")
* [Norsk nynorsk](https://nn.wikipedia.org/wiki/Microsoft "Microsoft – Norwegian Nynorsk")
* [Occitan](https://oc.wikipedia.org/wiki/Microsoft "Microsoft – Occitan")
* [ଓଡ଼ିଆ](https://or.wikipedia.org/wiki/%E0%AC%AE%E0%AC%BE%E0%AC%87%E0%AC%95%E0%AD%8D%E0%AC%B0%E0%AD%8B%E0%AC%B8%E0%AC%AB%E0%AD%8D%E0%AC%9F "ମାଇକ୍ରୋସଫ୍ଟ – Odia")
* [Oʻzbekcha / ўзбекча](https://uz.wikipedia.org/wiki/Microsoft "Microsoft – Uzbek")
* [ਪੰਜਾਬੀ](https://pa.wikipedia.org/wiki/%E0%A8%AE%E0%A8%BE%E0%A8%88%E0%A8%95%E0%A9%8D%E0%A8%B0%E0%A9%8B%E0%A8%B8%E0%A8%BE%E0%A8%AB%E0%A8%9F "ਮਾਈਕ੍ਰੋਸਾਫਟ – Punjabi")
* [پنجابی](https://pnb.wikipedia.org/wiki/%D9%85%D8%A7%D8%A6%DB%8C%DA%A9%D8%B1%D9%88%D8%B3%D9%88%D9%81%D9%B9 "مائیکروسوفٹ – Western Punjabi")
* [پښتو](https://ps.wikipedia.org/wiki/%D9%85%D8%A7%D9%8A%DA%A9%D8%B1%D9%88%D8%B3%D8%A7%D9%81%D9%BC "مايکروسافټ – Pashto")
* [ភាសាខ្មែរ](https://km.wikipedia.org/wiki/%E1%9E%98%E1%9E%B8%E1%9E%80%E1%9F%92%E1%9E%9A%E1%9E%BC%E1%9E%9F%E1%9E%BC%E1%9E%94 "មីក្រូសូប – Khmer")
* [Piemontèis](https://pms.wikipedia.org/wiki/Microsoft "Microsoft – Piedmontese")
* [Plattdüütsch](https://nds.wikipedia.org/wiki/Microsoft "Microsoft – Low German")
* [Polski](https://pl.wikipedia.org/wiki/Microsoft "Microsoft – Polish")
* [Português](https://pt.wikipedia.org/wiki/Microsoft "Microsoft – Portuguese")
* [Qaraqalpaqsha](https://kaa.wikipedia.org/wiki/Microsoft "Microsoft – Kara-Kalpak")
* [Română](https://ro.wikipedia.org/wiki/Microsoft "Microsoft – Romanian")
* [Runa Simi](https://qu.wikipedia.org/wiki/Microsoft "Microsoft – Quechua")
* [Русиньскый](https://rue.wikipedia.org/wiki/Microsoft_Corporation "Microsoft Corporation – Rusyn")
* [Русский](https://ru.wikipedia.org/wiki/Microsoft "Microsoft – Russian")
* [Саха тыла](https://sah.wikipedia.org/wiki/Microsoft "Microsoft – Yakut")
* [संस्कृतम्](https://sa.wikipedia.org/wiki/%E0%A4%AE%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%B8%E0%A4%BE%E0%A4%AB%E0%A5%8D%E0%A4%9F%E0%A5%8D "माइक्रोसाफ्ट् – Sanskrit")
* [ᱥᱟᱱᱛᱟᱲᱤ](https://sat.wikipedia.org/wiki/%E1%B1%A2%E1%B1%9F%E1%B1%AD%E1%B1%A0%E1%B1%A8%E1%B1%9A%E1%B1%A5%E1%B1%9A%E1%B1%AF%E1%B1%B4 "ᱢᱟᱭᱠᱨᱚᱥᱚᱯᱴ – Santali")
* [Scots](https://sco.wikipedia.org/wiki/Microsoft "Microsoft – Scots")
* [Shqip](https://sq.wikipedia.org/wiki/Microsoft "Microsoft – Albanian")
* [Sicilianu](https://scn.wikipedia.org/wiki/Microsoft "Microsoft – Sicilian")
* [සිංහල](https://si.wikipedia.org/wiki/%E0%B6%B8%E0%B6%BA%E0%B7%92%E0%B6%9A%E0%B7%8A%E2%80%8D%E0%B6%BB%E0%B7%9C%E0%B7%83%E0%B7%9C%E0%B7%86%E0%B7%8A%E0%B6%A7%E0%B7%8A "මයික්‍රොසොෆ්ට් – Sinhala")
* [Simple English](https://simple.wikipedia.org/wiki/Microsoft "Microsoft – Simple English")
* [سنڌي](https://sd.wikipedia.org/wiki/%D9%85%D8%A7%D8%A6%DA%AA%D8%B1%D9%88%D8%B3%D8%A7%D9%81%D9%BD "مائڪروسافٽ – Sindhi")
* [Slovenčina](https://sk.wikipedia.org/wiki/Microsoft_Corporation "Microsoft Corporation – Slovak")
* [Slovenščina](https://sl.wikipedia.org/wiki/Microsoft "Microsoft – Slovenian")
* [Ślůnski](https://szl.wikipedia.org/wiki/Microsoft "Microsoft – Silesian")
* [Soomaaliga](https://so.wikipedia.org/wiki/Maykorosofti "Maykorosofti – Somali")
* [کوردی](https://ckb.wikipedia.org/wiki/%D9%85%D8%A7%DB%8C%DA%A9%D8%B1%DB%86%D8%B3%DB%86%D9%81%D8%AA "مایکرۆسۆفت – Central Kurdish")
* [Српски / srpski](https://sr.wikipedia.org/wiki/Microsoft "Microsoft – Serbian")
* [Srpskohrvatski / српскохрватски](https://sh.wikipedia.org/wiki/Microsoft "Microsoft – Serbo-Croatian")
* [Sunda](https://su.wikipedia.org/wiki/Koporasi_Microsoft "Koporasi Microsoft – Sundanese")
* [Suomi](https://fi.wikipedia.org/wiki/Microsoft "Microsoft – Finnish")
* [Svenska](https://sv.wikipedia.org/wiki/Microsoft "Microsoft – Swedish")
* [Tagalog](https://tl.wikipedia.org/wiki/Microsoft "Microsoft – Tagalog")
* [தமிழ்](https://ta.wikipedia.org/wiki/%E0%AE%AE%E0%AF%88%E0%AE%95%E0%AF%8D%E0%AE%B0%E0%AF%8B%E0%AE%9A%E0%AE%BE%E0%AE%AA%E0%AF%8D%E0%AE%9F%E0%AF%8D "மைக்ரோசாப்ட் – Tamil")
* [Taqbaylit](https://kab.wikipedia.org/wiki/Microsoft "Microsoft – Kabyle")
* [Татарча / tatarça](https://tt.wikipedia.org/wiki/Microsoft "Microsoft – Tatar")
* [ၽႃႇသႃႇတႆး](https://shn.wikipedia.org/wiki/%E1%80%99%E1%81%A2%E1%82%86%E1%82%89%E1%81%B6%E1%80%9B%E1%80%B0%E1%80%9D%E1%80%BA%E1%82%87%E1%80%9E%E1%80%BD%E1%80%95%E1%80%BA%E1%82%89%E1%81%BE%E1%80%BA "မၢႆႉၶရူဝ်ႇသွပ်ႉၾ် – Shan")
* [తెలుగు](https://te.wikipedia.org/wiki/%E0%B0%AE%E0%B1%88%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B1%8B%E0%B0%B8%E0%B0%BE%E0%B0%AB%E0%B1%8D%E0%B0%9F%E0%B1%8D "మైక్రోసాఫ్ట్ – Telugu")
* [ไทย](https://th.wikipedia.org/wiki/%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C "ไมโครซอฟท์ – Thai")
* [Тоҷикӣ](https://tg.wikipedia.org/wiki/Microsoft "Microsoft – Tajik")
* [Türkçe](https://tr.wikipedia.org/wiki/Microsoft "Microsoft – Turkish")
* [Türkmençe](https://tk.wikipedia.org/wiki/Microsoft "Microsoft – Turkmen")
* [Українська](https://uk.wikipedia.org/wiki/Microsoft "Microsoft – Ukrainian")
* [اردو](https://ur.wikipedia.org/wiki/%D9%85%D8%A7%D8%A6%DB%8C%DA%A9%D8%B1%D9%88%D8%B3%D8%A7%D9%81%D9%B9 "مائیکروسافٹ – Urdu")
* [ئۇيغۇرچە / Uyghurche](https://ug.wikipedia.org/wiki/%D9%85%D9%89%D9%83%D8%B1%D9%88%D8%B3%D9%88%D9%81%D9%89%D8%AA_%D8%B4%D9%89%D8%B1%D9%83%D9%89%D8%AA%D9%89 "مىكروسوفىت شىركىتى – Uyghur")
* [Vèneto](https://vec.wikipedia.org/wiki/Microsoft_Corporation "Microsoft Corporation – Venetian")
* [Tiếng Việt](https://vi.wikipedia.org/wiki/Microsoft "Microsoft – Vietnamese")
* [Võro](https://fiu-vro.wikipedia.org/wiki/Microsoft "Microsoft – Võro")
* [Walon](https://wa.wikipedia.org/wiki/Microsoft "Microsoft – Walloon")
* [文言](https://zh-classical.wikipedia.org/wiki/%E5%BE%AE%E8%BB%9F "微軟 – Literary Chinese")
* [Winaray](https://war.wikipedia.org/wiki/Microsoft "Microsoft – Waray")
* [吴语](https://wuu.wikipedia.org/wiki/%E5%BE%AE%E8%BD%AF "微软 – Wu")
* [ייִדיש](https://yi.wikipedia.org/wiki/%D7%9E%D7%99%D7%99%D7%A7%D7%A8%D7%90%D7%A1%D7%90%D7%A4%D7%98 "מייקראסאפט – Yiddish")
* [Yorùbá](https://yo.wikipedia.org/wiki/Microsoft "Microsoft – Yoruba")
* [粵語](https://zh-yue.wikipedia.org/wiki/%E5%BE%AE%E8%BB%9F "微軟 – Cantonese")
* [Zazaki](https://diq.wikipedia.org/wiki/Microsoft "Microsoft – Zazaki")
* [中文](https://zh.wikipedia.org/wiki/%E5%BE%AE%E8%BD%AF "微软 – Chinese")

[Edit links](https://www.wikidata.org/wiki/Special%3AEntityPage/Q2283#sitelinks-wikipedia "Edit interlanguage links")

* [Article](/wiki/Microsoft "View the content page [c]")
* [Talk](/wiki/Talk%3AMicrosoft "Discuss improvements to the content page [t]")

English

* [Read](/wiki/Microsoft)
* [View source](/w/index.php?title=Microsoft&action=edit "This page is protected.
  You can view its source [e]")
* [View history](/w/index.php?title=Microsoft&action=history "Past revisions of this page [h]")

Tools

Tools

move to sidebar
hide

Actions

* [Read](/wiki/Microsoft)
* [View source](/w/index.php?title=Microsoft&action=edit)
* [View history](/w/index.php?title=Microsoft&action=history)

General

* [What links here](/wiki/Special%3AWhatLinksHere/Microsoft "List of all English Wikipedia pages containing links to this page [j]")
* [Related changes](/wiki/Special%3ARecentChangesLinked/Microsoft "Recent changes in pages linked from this page [k]")
* [Upload file](/wiki/Wikipedia%3AFile_Upload_Wizard "Upload files [u]")
* [Special pages](/wiki/Special%3ASpecialPages "A list of all special pages [q]")
* [Permanent link](/w/index.php?title=Microsoft&oldid=1213513440 "Permanent link to this revision of this page")
* [Page information](/w/index.php?title=Microsoft&action=info "More information about this page")
* [Cite this page](/w/index.php?title=Special:CiteThisPage&page=Microsoft&id=1213513440&wpFormIdentifier=titleform "Information on how to cite this page")
* [Get shortened URL](/w/index.php?title=Special:UrlShortener&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMicrosoft)
* [Download QR code](/w/index.php?title=Special:QrCode&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMicrosoft)
* [Wikidata item](https://www.wikidata.org/wiki/Special%3AEntityPage/Q2283 "Structured data on this page hosted by Wikidata [g]")

Print/export

* [Download as PDF](/w/index.php?title=Special:DownloadAsPdf&page=Microsoft&action=show-download-screen "Download this page as a PDF file")
* [Printable version](/w/index.php?title=Microsoft&printable=yes "Printable version of this page [p]")

In other projects

* [Wikimedia Commons](https://commons.wikimedia.org/wiki/Microsoft)
* [Wikinews](https://en.wikinews.org/wiki/Category%3AMicrosoft)
* [Wikiquote](https://en.wikiquote.org/wiki/Microsoft)

[Coordinates](/wiki/Geographic_coordinate_system "Geographic coordinate system"): [47°38′23″N 122°7′42″W﻿ / ﻿47.63972°N 122.12833°W﻿ / 47.63972; -122.12833](https://geohack.toolforge.org/geohack.php?pagename=Microsoft&params=47_38_23_N_122_7_42_W_region:US_dim:540)

[![Page semi-protected](//upload.wikimedia.org/wikipedia/en/thumb/1/1b/Semi-protection-shackle.svg/20px-Semi-protection-shackle.svg.png)](/wiki/Wikipedia%3AProtection_policy#semi "This article is semi-protected due to vandalism")

From Wikipedia, the free encyclopedia

American multinational technology corporation

Microsoft Corporation

|  |  |
| --- | --- |
| [![A square divided into four sub-squares, colored red-orange, green, yellow and blue (clockwise), with the company name appearing to its right](//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/250px-Microsoft_logo_%282012%29.svg.png)](/wiki/File%3AMicrosoft_logo_%282012%29.svg) | |
| [![](//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Building92microsoft.jpg/250px-Building92microsoft.jpg)](/wiki/File%3ABuilding92microsoft.jpg) Building 92 on the [Microsoft Redmond campus](/wiki/Microsoft_Redmond_campus "Microsoft Redmond campus") | |
| Company type | [Public](/wiki/Public_company "Public company") |
| [Traded as](/wiki/Ticker_symbol "Ticker symbol") | * [Nasdaq](/wiki/Nasdaq "Nasdaq"): [MSFT](https://www.nasdaq.com/market-activity/stocks/msft) * [Nasdaq-100](/wiki/Nasdaq-100 "Nasdaq-100") component * [DJIA](/wiki/Dow_Jones_Industrial_Average "Dow Jones Industrial Average") component * [S&P 100](/wiki/S%26P_100 "S&P 100") component * [S&P 500](/wiki/S%26P_500 "S&P 500") component |
| [ISIN](/wiki/International_Securities_Identification_Number "International Securities Identification Number") | [US5949181045](https://isin.toolforge.org/?language=en&isin=US5949181045) |
| Industry | [Information technology](/wiki/Information_technology "Information technology") |
| Founded | April 4, 1975; 48 years ago (1975-04-04) in [Albuquerque, New Mexico](/wiki/Albuquerque%2C_New_Mexico "Albuquerque, New Mexico"), U.S. |
| Founders | * [Bill Gates](/wiki/Bill_Gates "Bill Gates") * [Paul Allen](/wiki/Paul_Allen "Paul Allen") |
| Headquarters | [One Microsoft Way](/wiki/One_Microsoft_Way "One Microsoft Way"), [Redmond, Washington](/wiki/Redmond%2C_Washington "Redmond, Washington") , U.S. |
| Area served | Worldwide |
| Key people | * [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella") ([Chairman](/wiki/Chairman "Chairman") & [CEO](/wiki/Chief_executive_officer "Chief executive officer")) * [Brad Smith](/wiki/Brad_Smith_%28American_lawyer%29 "Brad Smith (American lawyer)") ([Vice Chairman](/wiki/Vice-Chairman "Vice-Chairman") & [President](/wiki/President_%28corporate_title%29 "President (corporate title)")) * Bill Gates ([technical adviser](/wiki/Adviser "Adviser")) |
| Products | * [Software development](/wiki/Software_development "Software development") * [Computer hardware](/wiki/Computer_hardware "Computer hardware") * [Consumer electronics](/wiki/Consumer_electronics "Consumer electronics") * [Social networking service](/wiki/Social_networking_service "Social networking service") * [Cloud computing](/wiki/Cloud_computing "Cloud computing") * [Video games](/wiki/Video_game_industry "Video game industry") * [Internet](/wiki/Internet "Internet") * [Corporate venture capital](/wiki/Corporate_venture_capital "Corporate venture capital") |
| Brands | * [Windows](/wiki/Microsoft_Windows "Microsoft Windows") * [Microsoft 365](/wiki/Microsoft_365 "Microsoft 365") * [Skype](/wiki/Skype "Skype") * [Visual Studio](/wiki/Visual_Studio "Visual Studio") * [Xbox](/wiki/Xbox "Xbox") * [Dynamics](/wiki/Microsoft_Dynamics_365 "Microsoft Dynamics 365") * [Surface](/wiki/Microsoft_Surface "Microsoft Surface") |
| Services | * [Edge](/wiki/Microsoft_Edge "Microsoft Edge") * [Azure](/wiki/Microsoft_Azure "Microsoft Azure") * [Bing](/wiki/Microsoft_Bing "Microsoft Bing") * [LinkedIn](/wiki/LinkedIn "LinkedIn") * [Yammer](/wiki/Yammer "Yammer") * [Microsoft 365](/wiki/Microsoft_365 "Microsoft 365") * [OneDrive](/wiki/OneDrive "OneDrive") * [Outlook](/wiki/Microsoft_Outlook "Microsoft Outlook") * [GitHub](/wiki/GitHub "GitHub") * [Microsoft Store](/wiki/Microsoft_Store_%28digital%29 "Microsoft Store (digital)") * [Windows Update](/wiki/Windows_Update "Windows Update") * [Xbox Game Pass](/wiki/Xbox_Game_Pass "Xbox Game Pass") * [Xbox network](/wiki/Xbox_network "Xbox network") |
| Revenue | ![Increase](//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/11px-Increase2.svg.png) [US$](/wiki/United_States_dollar "United States dollar")211.9 billion (2023) |
| [Operating income](/wiki/Earnings_before_interest_and_taxes "Earnings before interest and taxes") | ![Increase](//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/11px-Increase2.svg.png) US$88.5 billion (2023) |
| [Net income](/wiki/Net_income "Net income") | ![Increase](//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/11px-Increase2.svg.png) US$73.4 billion (2023) |
| [Total assets](/wiki/Asset "Asset") | ![Increase](//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/11px-Increase2.svg.png) US$411.9 billion (2023) |
| [Total equity](/wiki/Equity_%28finance%29 "Equity (finance)") | ![Increase](//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/11px-Increase2.svg.png) US$206.2 billion (2023) |
| Number of employees | 221,000 (2023) |
| [Divisions](/wiki/Division_%28business%29 "Division (business)") | * [Microsoft Engineering Groups](/wiki/Microsoft_engineering_groups "Microsoft engineering groups") * [Microsoft Digital Crimes Unit](/wiki/Microsoft_Digital_Crimes_Unit "Microsoft Digital Crimes Unit") * [Microsoft Press](/wiki/Microsoft_Press "Microsoft Press") * [Microsoft Gaming](/wiki/Microsoft_Gaming "Microsoft Gaming") |
| [Subsidiaries](/wiki/Subsidiary "Subsidiary") | * [Microsoft Japan](/wiki/Microsoft_Japan "Microsoft Japan") * [Microsoft India](/wiki/Microsoft_India "Microsoft India") * [Microsoft Egypt](/wiki/Microsoft_Egypt "Microsoft Egypt") * [GitHub](/wiki/GitHub "GitHub") * [LinkedIn](/wiki/LinkedIn "LinkedIn") * [Metaswitch](/wiki/Metaswitch "Metaswitch") * [Nuance Communications](/wiki/Nuance_Communications "Nuance Communications") * [RiskIQ](/wiki/RiskIQ "RiskIQ") * [Skype Technologies](/wiki/Skype_Technologies "Skype Technologies") * [Xamarin](/wiki/Xamarin "Xamarin") * [Xandr](/wiki/Xandr "Xandr") |
|  | |
| [ASN](/wiki/Autonomous_System_Number "Autonomous System Number") | * [8075](https://bgp.tools/as/8075) |
|  | |
| Website | [microsoft.com](https://www.microsoft.com/) |
| **Footnotes / references** Financials as of June 30, 2023[[update]](https://en.wikipedia.org/w/index.php?title=Microsoft&action=edit)[[1]](#cite_note-1) | |

|  |  |  |
| --- | --- | --- |
| |  |  | | --- | --- | | [![Bill Gates in 2023](//upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/75px-Bill_Gates_2017_%28cropped%29.jpg)](/wiki/File%3ABill_Gates_2017_%28cropped%29.jpg) | This article is part of  a series about  [Bill Gates](/wiki/Bill_Gates "Bill Gates") | |
| * [Awards and honors](/wiki/Bill_Gates#Recognition "Bill Gates") * [Philanthropy](/wiki/Bill_Gates#Philanthropy "Bill Gates") * [Political positions](/wiki/Bill_Gates#Political_positions "Bill Gates") * [Public image](/wiki/Bill_Gates#Public_image "Bill Gates") * [Residence](/wiki/Bill_Gates%27s_house "Bill Gates's house")  ---   Companies   * [Traf-O-Data](/wiki/Traf-O-Data "Traf-O-Data") * Microsoft ([criticism](/wiki/Criticism_of_Microsoft "Criticism of Microsoft")) * [BEN](/wiki/Branded_Entertainment_Network "Branded Entertainment Network") * [Cascade Investment](/wiki/Cascade_Investment "Cascade Investment") * [TerraPower](/wiki/TerraPower "TerraPower") * [Gates Ventures](/wiki/Gates_Ventures "Gates Ventures")  ---   Charitable organizations   * [Bill & Melinda Gates Foundation](/wiki/Bill_%26_Melinda_Gates_Foundation "Bill & Melinda Gates Foundation") * [Match for Africa](/wiki/Match_for_Africa "Match for Africa") * [The Giving Pledge](/wiki/The_Giving_Pledge "The Giving Pledge") * [OER Project](/wiki/OER_Project "OER Project") * [Breakthrough Energy](/wiki/Breakthrough_Energy "Breakthrough Energy") * [Mission Innovation](/wiki/Mission_Innovation "Mission Innovation")  ---   Writings   * "[An Open Letter to Hobbyists](/wiki/An_Open_Letter_to_Hobbyists "An Open Letter to Hobbyists")" * *[The Road Ahead](/wiki/The_Road_Ahead_%28Gates_book%29 "The Road Ahead (Gates book)")* * *[Business @ the Speed of Thought](/wiki/Business_%40_the_Speed_of_Thought "Business @ the Speed of Thought")* * *[How to Avoid a Climate Disaster](/wiki/How_to_Avoid_a_Climate_Disaster "How to Avoid a Climate Disaster")* * *[How to Prevent the Next Pandemic](/wiki/How_to_Prevent_the_Next_Pandemic "How to Prevent the Next Pandemic")*  ---   Related   * [Bill Gates' flower fly](/wiki/Bill_Gates%27_flower_fly "Bill Gates' flower fly") * [Codex Leicester](/wiki/Codex_Leicester "Codex Leicester") * *[Lost on the Grand Banks](/wiki/Lost_on_the_Grand_Banks "Lost on the Grand Banks")* * [History of Microsoft](/wiki/History_of_Microsoft "History of Microsoft") * [Timeline of Microsoft](/wiki/Timeline_of_Microsoft "Timeline of Microsoft") * [Paul Allen](/wiki/Paul_Allen "Paul Allen")  --- |
| * [v](/wiki/Template%3ABill_Gates_series "Template:Bill Gates series") * [t](/wiki/Template_talk%3ABill_Gates_series "Template talk:Bill Gates series") * [e](/wiki/Special%3AEditPage/Template%3ABill_Gates_series "Special:EditPage/Template:Bill Gates series") |

**Microsoft Corporation** is an American [multinational corporation](/wiki/Multinational_corporation "Multinational corporation") and [technology company](/wiki/Technology_company "Technology company") headquartered in [Redmond, Washington](/wiki/Redmond%2C_Washington "Redmond, Washington").[[2]](#cite_note-2) Microsoft's best-known [software products](/wiki/List_of_Microsoft_software "List of Microsoft software") are the [Windows](/wiki/Microsoft_Windows "Microsoft Windows") line of [operating systems](/wiki/List_of_Microsoft_operating_systems "List of Microsoft operating systems"), the [Microsoft 365](/wiki/Microsoft_365 "Microsoft 365") suite of productivity applications, and the [Edge](/wiki/Microsoft_Edge "Microsoft Edge") web browser. Its flagship [hardware products](/wiki/List_of_Microsoft_hardware "List of Microsoft hardware") are the [Xbox](/wiki/Xbox "Xbox") video game consoles and the [Microsoft Surface](/wiki/Microsoft_Surface "Microsoft Surface") lineup of [touchscreen](/wiki/Touchscreen "Touchscreen") personal computers. Microsoft ranked No. 14 in the 2022 [Fortune 500](/wiki/Fortune_500 "Fortune 500") rankings of the largest United States corporations by total revenue;[[3]](#cite_note-3) and it was the world's [largest software maker](/wiki/List_of_the_largest_software_companies "List of the largest software companies") by revenue in 2022 according to [Forbes Global 2000](/wiki/Forbes_Global_2000 "Forbes Global 2000"). It is considered one of the [Big Five](/wiki/Big_Tech "Big Tech") American [information technology](/wiki/Information_technology "Information technology") companies, alongside [Alphabet](/wiki/Alphabet_Inc. "Alphabet Inc.") (parent company of [Google](/wiki/Google "Google")), [Amazon](/wiki/Amazon_%28company%29 "Amazon (company)"), [Apple](/wiki/Apple_Inc. "Apple Inc."), and [Meta](/wiki/Meta_Platforms "Meta Platforms") (parent company of [Facebook](/wiki/Facebook "Facebook")).

Microsoft was founded by [Bill Gates](/wiki/Bill_Gates "Bill Gates") and [Paul Allen](/wiki/Paul_Allen "Paul Allen") on April 4, 1975, to develop and sell [BASIC interpreters](/wiki/BASIC_interpreter "BASIC interpreter") for the [Altair 8800](/wiki/Altair_8800 "Altair 8800"). It rose to dominate the personal computer operating system market with [MS-DOS](/wiki/MS-DOS "MS-DOS") in the mid-1980s, followed by Windows. The company's 1986 [initial public offering](/wiki/Initial_public_offering "Initial public offering") (IPO) and subsequent rise in its share price created three billionaires and an estimated 12,000 millionaires among Microsoft employees. Since the 1990s, it has increasingly diversified from the operating system market and has made several [corporate acquisitions](/wiki/List_of_mergers_and_acquisitions_by_Microsoft "List of mergers and acquisitions by Microsoft"), the largest being the [acquisition](/wiki/Acquisition_of_Activision_Blizzard_by_Microsoft "Acquisition of Activision Blizzard by Microsoft") of [Activision Blizzard](/wiki/Activision_Blizzard "Activision Blizzard") for $68.7 billion in October 2023,[[4]](#cite_note-4) followed by its acquisition of [LinkedIn](/wiki/LinkedIn "LinkedIn") for $26.2 billion in December 2016,[[5]](#cite_note-5) and its acquisition of [Skype Technologies](/wiki/Skype_Technologies "Skype Technologies") for $8.5 billion in May 2011.[[6]](#cite_note-6)

As of 2015[[update]](https://en.wikipedia.org/w/index.php?title=Microsoft&action=edit), Microsoft is market-dominant in the [IBM PC compatible](/wiki/IBM_PC_compatible "IBM PC compatible") operating system market and the office software suite market, although it has lost the majority of the overall operating system market to [Android](/wiki/Android_%28operating_system%29 "Android (operating system)").[[7]](#cite_note-7) The company also produces a wide range of other consumer and enterprise software for desktops, laptops, tabs, gadgets, and servers, including [Internet search](/wiki/Web_search_engine "Web search engine") (with [Bing](/wiki/Microsoft_Bing "Microsoft Bing")), the digital services market (through [MSN](/wiki/MSN "MSN")), [mixed reality](/wiki/Mixed_reality "Mixed reality") ([HoloLens](/wiki/Microsoft_HoloLens "Microsoft HoloLens")), cloud computing ([Azure](/wiki/Microsoft_Azure "Microsoft Azure")), and software development ([Visual Studio](/wiki/Microsoft_Visual_Studio "Microsoft Visual Studio")).

[Steve Ballmer](/wiki/Steve_Ballmer "Steve Ballmer") replaced Gates as CEO in 2000 and later envisioned a "devices and services" strategy.[[8]](#cite_note-8) This unfolded with Microsoft acquiring [Danger Inc.](/wiki/Danger_Inc. "Danger Inc.") in 2008,[[9]](#cite_note-9) entering the personal computer production market for the first time in June 2012 with the launch of the Microsoft Surface line of [tablet computers](/wiki/Tablet_computer "Tablet computer"), and later forming [Microsoft Mobile](/wiki/Microsoft_Mobile "Microsoft Mobile") through the acquisition of [Nokia](/wiki/Nokia "Nokia")'s devices and services division. Since [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella") took over as CEO in 2014, the company has scaled back on hardware and instead focused on [cloud computing](/wiki/Cloud_computing "Cloud computing"), a move that helped the company's [shares](/wiki/Share_%28finance%29 "Share (finance)") reach their highest value since December 1999.[[10]](#cite_note-10)[[11]](#cite_note-11) Under Nadella's direction, the company has also heavily expanded its gaming business to support the Xbox brand, establishing the [Microsoft Gaming](/wiki/Microsoft_Gaming "Microsoft Gaming") division in 2022, dedicated to operating Xbox in addition to its three subsidiaries ([publishers](/wiki/Video_game_publisher "Video game publisher")). Microsoft Gaming is the third-largest gaming company in the world by revenue as of 2023.[[12]](#cite_note-12)

Earlier dethroned by Apple in 2010, and in 2018, Microsoft reclaimed its position as the most valuable publicly traded company in the world.[[13]](#cite_note-13) In April 2019, Microsoft reached a trillion-dollar [market cap](/wiki/Market_capitalization "Market capitalization"), becoming the third U.S. public company to be [valued at over $1 trillion](/wiki/Trillion-dollar_company "Trillion-dollar company") after Apple and Amazon, respectively. As of 2023[[update]](https://en.wikipedia.org/w/index.php?title=Microsoft&action=edit), Microsoft has the [third-highest](/wiki/List_of_most_valuable_brands "List of most valuable brands") global [brand valuation](/wiki/Brand_valuation "Brand valuation").

Microsoft [has been criticized](/wiki/Criticism_of_Microsoft "Criticism of Microsoft") for its monopolistic practices and the company's software has been criticized for problems with [ease of use](/wiki/Ease_of_use "Ease of use"), [robustness](/wiki/Robustness_%28computer_science%29 "Robustness (computer science)"), and [security](/wiki/Computer_security "Computer security").

## History

Main article: [History of Microsoft](/wiki/History_of_Microsoft "History of Microsoft")

For a chronological guide, see [Timeline of Microsoft](/wiki/Timeline_of_Microsoft "Timeline of Microsoft").

### 1972–1985: Founding

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Altair_8800_and_Model_33_ASR_Teletype_.jpg/256px-Altair_8800_and_Model_33_ASR_Teletype_.jpg)](/wiki/File%3AAltair_8800_and_Model_33_ASR_Teletype_.jpg)

An Altair 8800 computer (left) with the popular Model 33 ASR Teletype as terminal, paper tape reader, and paper tape punch

[![](//upload.wikimedia.org/wikipedia/en/thumb/4/4f/1981BillPaul.jpg/220px-1981BillPaul.jpg)](/wiki/File%3A1981BillPaul.jpg)

[Paul Allen](/wiki/Paul_Allen "Paul Allen") and [Bill Gates](/wiki/Bill_Gates "Bill Gates") on October 19, 1981, after signing a pivotal contract with [IBM](/wiki/IBM "IBM")[[14]](#cite_note-Allan_2001-14): 228

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Gates_and_Paul_Allen_Business_Cards.jpg/220px-Bill_Gates_and_Paul_Allen_Business_Cards.jpg)](/wiki/File%3ABill_Gates_and_Paul_Allen_Business_Cards.jpg)

Bill Gates and Paul Allen's Original Business Cards located in the Microsoft Visitor Center.

Childhood friends [Bill Gates](/wiki/Bill_Gates "Bill Gates") and [Paul Allen](/wiki/Paul_Allen "Paul Allen") sought to make a business using their skills in [computer programming](/wiki/Computer_programming "Computer programming").[[15]](#cite_note-15) In 1972, they founded [Traf-O-Data](/wiki/Traf-O-Data "Traf-O-Data"), which sold a rudimentary computer to track and analyze automobile traffic data. Gates enrolled at [Harvard University](/wiki/Harvard_University "Harvard University") while Allen pursued a degree in computer science at [Washington State University](/wiki/Washington_State_University "Washington State University"), though he later dropped out to work at [Honeywell](/wiki/Honeywell "Honeywell").[[16]](#cite_note-16) The January 1975 issue of *[Popular Electronics](/wiki/Popular_Electronics "Popular Electronics")* featured [Micro Instrumentation and Telemetry Systems](/wiki/Micro_Instrumentation_and_Telemetry_Systems "Micro Instrumentation and Telemetry Systems")'s (MITS) [Altair 8800](/wiki/Altair_8800 "Altair 8800") microcomputer,[[17]](#cite_note-17) which inspired Allen to suggest that they could program a [BASIC](/wiki/BASIC "BASIC") interpreter for the device. Gates called MITS and claimed that he had a working interpreter, and MITS requested a demonstration. Allen worked on a simulator for the Altair while Gates developed the interpreter, and it worked flawlessly when they demonstrated it to MITS in March 1975 in [Albuquerque, New Mexico](/wiki/Albuquerque%2C_New_Mexico "Albuquerque, New Mexico"). MITS agreed to distribute it, marketing it as [Altair BASIC](/wiki/Altair_BASIC "Altair BASIC").[[14]](#cite_note-Allan_2001-14): 108, 112–114 Gates and Allen established Microsoft on April 4, 1975, with Gates as CEO,[[18]](#cite_note-BBCTL-18) and Allen suggested the name "Micro-Soft," short for micro-computer software.[[19]](#cite_note-19)[[20]](#cite_note-20) In August 1977, the company formed an agreement with ASCII Magazine in Japan, resulting in its first international office of [ASCII Microsoft](/wiki/ASCII_Corporation "ASCII Corporation").[[21]](#cite_note-21) Microsoft moved its headquarters to [Bellevue, Washington](/wiki/Bellevue%2C_Washington "Bellevue, Washington"), in January 1979.[[18]](#cite_note-BBCTL-18)

Microsoft entered the operating system (OS) business in 1980 with its own version of [Unix](/wiki/Unix "Unix") called [Xenix](/wiki/Xenix "Xenix"),[[22]](#cite_note-22) but it was [MS-DOS](/wiki/MS-DOS "MS-DOS") that solidified the company's dominance. [IBM](/wiki/IBM "IBM") awarded a contract to Microsoft in November 1980 to provide a version of the [CP/M](/wiki/CP/M "CP/M") OS to be used in the [IBM Personal Computer](/wiki/IBM_Personal_Computer "IBM Personal Computer") (IBM PC).[[23]](#cite_note-23) For this deal, Microsoft purchased a CP/M clone called [86-DOS](/wiki/86-DOS "86-DOS") from [Seattle Computer Products](/wiki/Seattle_Computer_Products "Seattle Computer Products") which it branded as MS-DOS, although IBM rebranded it to [IBM PC DOS](/wiki/IBM_PC_DOS "IBM PC DOS"). Microsoft retained ownership of MS-DOS following the release of the IBM PC in August 1981. IBM had copyrighted the IBM PC [BIOS](/wiki/BIOS "BIOS"), so other companies had to reverse engineer it for non-IBM hardware to run as [IBM PC compatibles](/wiki/IBM_PC_compatible "IBM PC compatible"), but no such restriction applied to the operating systems. Microsoft eventually became the leading PC operating systems vendor.[[24]](#cite_note-24)[[25]](#cite_note-25): 210 The company expanded into new markets with the release of the [Microsoft Mouse](/wiki/Microsoft_Mouse "Microsoft Mouse") in 1983, as well as with a publishing division named [Microsoft Press](/wiki/Microsoft_Press "Microsoft Press").[[14]](#cite_note-Allan_2001-14): 232
Paul Allen resigned from Microsoft in 1983 after developing [Hodgkin's lymphoma](/wiki/Hodgkin%27s_lymphoma "Hodgkin's lymphoma").[[26]](#cite_note-26) Allen claimed in *Idea Man: A Memoir by the co-founder of Microsoft* that Gates wanted to dilute his share in the company when he was diagnosed with Hodgkin's disease because he did not think that he was working hard enough.[[27]](#cite_note-27) Allen later invested in low-tech sectors, sports teams, commercial real estate, neuroscience, private space flight, and more.[[28]](#cite_note-28)

### 1985–1994: Windows and Office

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Microsoft_Windows_1.0_pages2_3.jpg/220px-Microsoft_Windows_1.0_pages2_3.jpg)](/wiki/File%3AMicrosoft_Windows_1.0_pages2_3.jpg)

[Windows 1.0](/wiki/Windows_1.0 "Windows 1.0") was released on November 20, 1985, as the first version of the Windows line.

Microsoft released [Windows](/wiki/Windows "Windows") on November 20, 1985, as a graphical extension for [MS-DOS](/wiki/MS-DOS "MS-DOS"),[[14]](#cite_note-Allan_2001-14): 242–243, 246 despite having begun jointly developing [OS/2](/wiki/OS/2 "OS/2") with IBM that August.[[29]](#cite_note-29) Microsoft moved its headquarters from Bellevue to [Redmond, Washington](/wiki/Redmond%2C_Washington "Redmond, Washington"), on February 26, 1986, and went public on March 13,[[30]](#cite_note-CBSCHRON-30) with the resulting rise in stock making an estimated four billionaires and 12,000 millionaires from Microsoft employees.[[31]](#cite_note-31) Microsoft released its version of OS/2 to original equipment manufacturers (OEMs) on April 2, 1987.[[14]](#cite_note-Allan_2001-14) In 1990, the Federal Trade Commission examined Microsoft for possible collusion due to the partnership with IBM, marking the beginning of more than a decade of legal clashes with the government.[[32]](#cite_note-32) : 243–244 Meanwhile, the company was at work on Microsoft [Windows NT](/wiki/Windows_NT "Windows NT"), which was heavily based on their copy of the OS/2 code. It shipped on July 21, 1993, with a new modular [kernel](/wiki/Kernel_%28operating_system%29 "Kernel (operating system)") and the [32-bit](/wiki/32-bit_computing "32-bit computing") [Win32](/wiki/Windows_API "Windows API") application programming interface (API), making it easier to port from [16-bit](/wiki/16-bit_computing "16-bit computing") (MS-DOS-based) Windows. Microsoft informed IBM of Windows NT, and the OS/2 partnership deteriorated.[[33]](#cite_note-33)

In 1990, Microsoft introduced the [Microsoft Office](/wiki/Microsoft_Office "Microsoft Office") suite which bundled separate applications such as [Microsoft Word](/wiki/Microsoft_Word "Microsoft Word") and [Microsoft Excel](/wiki/Microsoft_Excel "Microsoft Excel").[[14]](#cite_note-Allan_2001-14): 301 On May 22, Microsoft launched [Windows 3.0](/wiki/Windows_3.0 "Windows 3.0"), featuring streamlined user interface graphics and improved protected mode capability for the [Intel 386](/wiki/I386 "I386") processor,[[34]](#cite_note-34) and both Office and Windows became dominant in their respective areas.[[35]](#cite_note-35)[[36]](#cite_note-36)

On July 27, 1994, the [Department of Justice's Antitrust Division](/wiki/United_States_Department_of_Justice_Antitrust_Division "United States Department of Justice Antitrust Division") filed a competitive impact statement that said: "Beginning in 1988 and continuing until July 15, 1994, Microsoft induced many OEMs to execute anti-competitive 'per processor licenses. Under a per-processor license, an OEM pays Microsoft a royalty for each computer it sells containing a particular microprocessor, whether the OEM sells the computer with a Microsoft operating system or a non-Microsoft operating system. In effect, the royalty payment to Microsoft when no Microsoft product is being used acts as a penalty, or tax, on the OEM's use of a competing PC operating system. Since 1988, Microsoft's use of per processor licenses has increased."[[37]](#cite_note-37)

### 1995–2007: Foray into the Web, Windows 95, Windows XP, and Xbox

[![](//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/300lx.jpg/220px-300lx.jpg)](/wiki/File%3A300lx.jpg)

In 1996, Microsoft released Windows CE, a version of the operating system meant for personal digital assistants and other tiny computers, shown here on the [HP 300LX](/wiki/HP_300LX "HP 300LX").

Following Bill Gates's internal "Internet Tidal Wave memo" on May 26, 1995, Microsoft began to redefine its offerings and expand its product line into [computer networking](/wiki/Computer_network "Computer network") and the [World Wide Web](/wiki/World_Wide_Web "World Wide Web").[[38]](#cite_note-38) With a few exceptions of new companies, like [Netscape](/wiki/Netscape "Netscape"), Microsoft was the only major and established company that acted fast enough to be a part of the World Wide Web practically from the start. Other companies like [Borland](/wiki/Borland "Borland"), [WordPerfect](/wiki/WordPerfect "WordPerfect"), [Novell](/wiki/Novell "Novell"), [IBM](/wiki/IBM "IBM") and [Lotus](/wiki/Lotus_Software "Lotus Software"), being much slower to adapt to the new situation, would give Microsoft market dominance.[[39]](#cite_note-39)

The company released [Windows 95](/wiki/Windows_95 "Windows 95") on August 24, 1995, featuring [pre-emptive multitasking](/wiki/Preemption_%28computing%29#PREEMPTIVE "Preemption (computing)"), a completely new user interface with a novel [start button](/wiki/Start_menu "Start menu"), and 32-bit compatibility; similar to NT, it provided the Win32 API.[[40]](#cite_note-40)[[41]](#cite_note-41): 20 Windows 95 came bundled with the [online service](/wiki/Online_service_provider "Online service provider") [MSN](/wiki/MSN "MSN"), which was at first intended to be a competitor to the Internet,[*[dubious](/wiki/Wikipedia%3AAccuracy_dispute#Disputed_statement "Wikipedia:Accuracy dispute")  – [discuss](/wiki/Talk%3AMicrosoft#Dubious "Talk:Microsoft")*] and (for OEMs) [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer"), a [Web browser](/wiki/Web_browser "Web browser"). Internet Explorer has not bundled with the retail Windows 95 boxes, because the boxes were printed before the team finished the Web browser, and instead were included in the Windows 95 Plus! pack.[[42]](#cite_note-42) Backed by a high-profile marketing campaign[[43]](#cite_note-43) and what *[The New York Times](/wiki/The_New_York_Times "The New York Times")* called "the splashiest, most frenzied, most expensive introduction of a computer product in the industry's history,"[[44]](#cite_note-44) Windows 95 quickly became a success.[[45]](#cite_note-45) Branching out into new markets in 1996, Microsoft and [General Electric](/wiki/General_Electric "General Electric")'s [NBC](/wiki/NBC "NBC") unit created a new [24/7](/wiki/24/7_service "24/7 service") cable news channel, [MSNBC](/wiki/MSNBC "MSNBC").[[46]](#cite_note-46) Microsoft created [Windows CE 1.0](/wiki/Windows_Embedded_Compact#Versions "Windows Embedded Compact"), a new OS designed for devices with low memory and other constraints, such as [personal digital assistants](/wiki/Personal_digital_assistant "Personal digital assistant").[[47]](#cite_note-47) In October 1997, the Justice Department filed a motion in the Federal [District Court](/wiki/United_States_district_court "United States district court"), stating that Microsoft violated an agreement signed in 1994 and asked the court to stop the bundling of [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer") with Windows.[[14]](#cite_note-Allan_2001-14): 323–324

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/220px-Xbox-console.jpg)](/wiki/File%3AXbox-console.jpg)

Microsoft released the first installment in the [Xbox](/wiki/Xbox "Xbox") series of consoles in 2001. The [Xbox](/wiki/Xbox_%28console%29 "Xbox (console)"), graphically powerful compared to its rivals, featured a standard PC's 733 MHz Intel Pentium III processor.

On January 13, 2000, Bill Gates handed over the CEO position to [Steve Ballmer](/wiki/Steve_Ballmer "Steve Ballmer"), an old college friend of Gates and employee of the company since 1980, while creating a new position for himself as Chief [Software Architect](/wiki/Software_architect "Software architect").[[14]](#cite_note-Allan_2001-14): 111, 228[[18]](#cite_note-BBCTL-18) Various companies including Microsoft formed the [Trusted Computing Platform Alliance](/wiki/Trusted_Computing_Group "Trusted Computing Group") in October 1999 to (among other things) increase security and protect [intellectual property](/wiki/Intellectual_property "Intellectual property") through identifying changes in hardware and software. Critics decried the alliance as a way to enforce indiscriminate restrictions over how consumers use software, and over how computers behave, and as a form of [digital rights management](/wiki/Digital_rights_management "Digital rights management"): for example, the scenario where a computer is not only secured for its owner but also secured against its owner as well.[[48]](#cite_note-48)[[49]](#cite_note-49) On April 3, 2000, a judgment was handed down in the case of *[United States v. Microsoft Corp.](/wiki/United_States_v._Microsoft_Corp. "United States v. Microsoft Corp.")*,[[50]](#cite_note-50) calling the company an "abusive monopoly."[[51]](#cite_note-51) Microsoft later settled with the U.S. Department of Justice in 2004.[[30]](#cite_note-CBSCHRON-30)

On October 25, 2001, Microsoft released [Windows XP](/wiki/Windows_XP "Windows XP"), unifying the mainstream and NT lines of OS under the NT codebase.[[52]](#cite_note-52) The company released the [Xbox](/wiki/Xbox_%28console%29 "Xbox (console)") later that year, entering the [video game console](/wiki/Video_game_console "Video game console") market dominated by [Sony](/wiki/Sony "Sony") and [Nintendo](/wiki/Nintendo "Nintendo").[[53]](#cite_note-53) In March 2004 the [European Union](/wiki/European_Union "European Union") brought [antitrust legal action against the company](/wiki/Microsoft_Corp._v._Commission "Microsoft Corp. v. Commission"), citing it abused its dominance with the Windows OS, resulting in a judgment of €497 million ($613 million) and requiring Microsoft to produce new versions of Windows XP without [Windows Media Player](/wiki/Windows_Media_Player "Windows Media Player"): Windows XP Home Edition N and Windows XP Professional N.[[54]](#cite_note-54)[[55]](#cite_note-55) In November 2005, the company's second video game console, the [Xbox 360](/wiki/Xbox_360 "Xbox 360"), was released. There were two versions, a basic version for $299.99 and a deluxe version for $399.99.[[56]](#cite_note-56)

Increasingly present in the hardware business following Xbox, Microsoft 2006 released the [Zune](/wiki/Zune "Zune") series of digital media players, a successor of its previous software platform [Portable Media Center](/wiki/Portable_Media_Center "Portable Media Center"). These expanded on previous hardware commitments from Microsoft following its original [Microsoft Mouse](/wiki/Microsoft_Mouse "Microsoft Mouse") in 1983; as of 2007 the company sold the best-selling wired keyboard ([Natural Ergonomic Keyboard 4000](/wiki/Microsoft_ergonomic_keyboards "Microsoft ergonomic keyboards")), mouse ([IntelliMouse](/wiki/IntelliMouse "IntelliMouse")), and desktop webcam ([LifeCam](/wiki/LifeCam "LifeCam")) in the United States. That year the company also launched the Surface "digital table", later renamed [PixelSense](/wiki/Microsoft_PixelSense "Microsoft PixelSense").[[57]](#cite_note-57)

### 2007–2011: Microsoft Azure, Windows Vista, Windows 7, and Microsoft Stores

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Steve_Ballmer_-_MIX_2008.jpg/220px-Steve_Ballmer_-_MIX_2008.jpg)](/wiki/File%3ASteve_Ballmer_-_MIX_2008.jpg)

CEO [Steve Ballmer](/wiki/Steve_Ballmer "Steve Ballmer") at the [MIX](/wiki/MIX_%28Microsoft%29 "MIX (Microsoft)") event in 2008. In an interview about his management style in 2005, he mentioned that his first priority was to get the people he delegates to in order. Ballmer also emphasized the need to continue pursuing new technologies even if initial attempts fail, citing the original attempts with Windows as an example.[[58]](#cite_note-58)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Belgique_-_Bruxelles_-_Schuman_-_Berlaymont_-_01.jpg/220px-Belgique_-_Bruxelles_-_Schuman_-_Berlaymont_-_01.jpg)](/wiki/File%3ABelgique_-_Bruxelles_-_Schuman_-_Berlaymont_-_01.jpg)

Headquarters of the European Commission, which has imposed several fines on Microsoft

Released in January 2007, the next version of Windows, [Vista](/wiki/Windows_Vista "Windows Vista"), focused on features, security and a redesigned user interface dubbed [Aero](/wiki/Windows_Aero "Windows Aero").[[59]](#cite_note-59)[[60]](#cite_note-60) [Microsoft Office 2007](/wiki/Microsoft_Office_2007 "Microsoft Office 2007"), released at the same time, featured a "[Ribbon](/wiki/Ribbon_%28computing%29 "Ribbon (computing)")" user interface which was a significant departure from its predecessors. Relatively strong sales of both products helped to produce a record profit in 2007.[[61]](#cite_note-61) The European Union imposed another fine of €899 million ($1.4 billion) for Microsoft's lack of compliance with the March 2004 judgment on February 27, 2008, saying that the company charged rivals unreasonable prices for key information about its [workgroup](/wiki/Microsoft_SQL_Server "Microsoft SQL Server") and [backoffice](/wiki/Microsoft_BackOffice_Server "Microsoft BackOffice Server") servers.[[62]](#cite_note-62) Microsoft stated that it was in compliance and that "these fines are about the past issues that have been resolved".[[63]](#cite_note-63) 2007 also saw the creation of a multi-core unit at Microsoft, following the steps of server companies such as Sun and IBM.[[64]](#cite_note-64)

Gates retired from his role as Chief Software Architect on June 27, 2008, a decision announced in June 2006, while retaining other positions related to the company in addition to being an advisor for the company on key projects.[[65]](#cite_note-65)[[66]](#cite_note-66) [Azure Services Platform](/wiki/Microsoft_Azure "Microsoft Azure"), the company's entry into the [cloud computing](/wiki/Cloud_computing "Cloud computing") market for Windows, launched on October 27, 2008.[[67]](#cite_note-67) On February 12, 2009, Microsoft announced its intent to open a chain of Microsoft-branded retail stores, and on October 22, 2009, the first retail [Microsoft Store](/wiki/Microsoft_Store_%28retail%29 "Microsoft Store (retail)") opened in [Scottsdale, Arizona](/wiki/Scottsdale%2C_Arizona "Scottsdale, Arizona"); the same day [Windows 7](/wiki/Windows_7 "Windows 7") was officially released to the public. Windows 7's focus was on refining Vista with ease-of-use features and performance enhancements, rather than an extensive reworking of Windows.[[68]](#cite_note-68)[[69]](#cite_note-69)[[70]](#cite_note-70)

As the smartphone industry boomed in the late 2000s, Microsoft had struggled to keep up with its rivals in providing a modern smartphone operating system, falling behind [Apple](/wiki/Apple_Inc. "Apple Inc.") and [Google](/wiki/Google "Google")-sponsored [Android](/wiki/Android_%28operating_system%29 "Android (operating system)") in the United States.[[71]](#cite_note-71) As a result, in 2010 Microsoft revamped their aging flagship mobile operating system, [Windows Mobile](/wiki/Windows_Mobile "Windows Mobile"), replacing it with the new [Windows Phone](/wiki/Windows_Phone "Windows Phone") OS that was released in October that year.[[72]](#cite_note-72)[[73]](#cite_note-73) It used a new user interface design language, codenamed "Metro," which prominently used simple shapes, typography, and iconography, utilizing the concept of minimalism. Microsoft implemented a new strategy for the software industry, providing a consistent user experience across all smartphones using the Windows Phone OS. It launched an alliance with [Nokia](/wiki/Nokia "Nokia") in 2011 and Microsoft worked closely with the company to co-develop Windows Phone,[[74]](#cite_note-74) but remained partners with long-time Windows Mobile OEM [HTC](/wiki/HTC "HTC").[[75]](#cite_note-75) Microsoft is a founding member of the [Open Networking Foundation](/wiki/Open_Networking_Foundation "Open Networking Foundation") started on March 23, 2011. Fellow founders were [Google](/wiki/Google "Google"), [HP Networking](/wiki/Hewlett_Packard_Enterprise_Networking "Hewlett Packard Enterprise Networking"), [Yahoo!](/wiki/Yahoo%21 "Yahoo!"), [Verizon Communications](/wiki/Verizon_Communications "Verizon Communications"), [Deutsche Telekom](/wiki/Deutsche_Telekom "Deutsche Telekom") and 17 other companies. This nonprofit organization is focused on providing support for a [cloud computing](/wiki/Cloud_computing "Cloud computing") initiative called Software-Defined Networking.[[76]](#cite_note-76) The initiative is meant to speed innovation through simple software changes in telecommunications networks, wireless networks, data centers, and other networking areas.[[77]](#cite_note-77)

### 2011–2014: Windows 8/8.1, Xbox One, Outlook.com, and Surface devices

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SurfacePro3.JPG/220px-SurfacePro3.JPG)](/wiki/File%3ASurfacePro3.JPG)

[Surface Pro 3](/wiki/Surface_Pro_3 "Surface Pro 3"), part of the [Surface](/wiki/Microsoft_Surface "Microsoft Surface") series of laplets by Microsoft

Following the release of [Windows Phone](/wiki/Windows_Phone "Windows Phone"), Microsoft undertook a gradual [rebranding](/wiki/Rebranding "Rebranding") of its product range throughout 2011 and 2012, with the corporation's logos, products, services, and websites adopting the principles and concepts of the [Metro design language](/wiki/Metro_%28design_language%29 "Metro (design language)").[[78]](#cite_note-78) Microsoft unveiled [Windows 8](/wiki/Windows_8 "Windows 8"), an operating system designed to power both personal computers and [tablet computers](/wiki/Tablet_computer "Tablet computer"), in Taipei in June 2011.[[79]](#cite_note-79) A developer preview was released on September 13, which was subsequently replaced by a consumer preview on February 29, 2012, and released to the public in May.[[80]](#cite_note-80) The [Surface](/wiki/Microsoft_Surface "Microsoft Surface") was unveiled on June 18, becoming the first computer in the company's history to have its hardware made by Microsoft.[[81]](#cite_note-81)[[82]](#cite_note-VF2012-82) On June 25, Microsoft paid US$1.2 billion to buy the social network [Yammer](/wiki/Yammer "Yammer").[[83]](#cite_note-83) On July 31, they launched the [Outlook.com](/wiki/Outlook.com "Outlook.com") [webmail service](/wiki/Webmail "Webmail") to compete with [Gmail](/wiki/Gmail "Gmail").[[84]](#cite_note-84) On September 4, 2012, Microsoft released [Windows Server 2012](/wiki/Windows_Server_2012 "Windows Server 2012").[[85]](#cite_note-85)

In July 2012, Microsoft sold its 50% stake in MSNBC, which it had run as a joint venture with NBC since 1996.[[86]](#cite_note-86) On October 1, Microsoft announced its intention to launch a news operation, part of a new-look [MSN](/wiki/MSN "MSN"), with Windows 8 later in the month.[[87]](#cite_note-87) On October 26, 2012, Microsoft launched Windows 8 and the [Microsoft Surface](/wiki/Microsoft_Surface "Microsoft Surface").[[82]](#cite_note-VF2012-82)[[88]](#cite_note-88) Three days later, [Windows Phone 8](/wiki/Windows_Phone_8 "Windows Phone 8") was launched.[[89]](#cite_note-89) To cope with the potential for an increase in demand for products and services, Microsoft opened a number of "holiday stores" across the U.S. to complement the increasing number of "bricks-and-mortar" Microsoft Stores that opened in 2012.[[90]](#cite_note-90) On March 29, 2013, Microsoft launched a Patent Tracker.[[91]](#cite_note-91)

In August 2012, the [New York City Police Department](/wiki/New_York_City_Police_Department "New York City Police Department") announced a partnership with Microsoft for the development of the [Domain Awareness System](/wiki/Domain_Awareness_System "Domain Awareness System") which is used for [Police surveillance in New York City](/wiki/Police_surveillance_in_New_York_City "Police surveillance in New York City").[[92]](#cite_note-92)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Microsoft-Xbox-One-Console-Set-wKinect.jpg/220px-Microsoft-Xbox-One-Console-Set-wKinect.jpg)](/wiki/File%3AMicrosoft-Xbox-One-Console-Set-wKinect.jpg)

The [Xbox One](/wiki/Xbox_One "Xbox One") console, released in 2013

The [Kinect](/wiki/Kinect "Kinect"), a motion-sensing input device made by Microsoft and designed as a [video game controller](/wiki/Game_controller "Game controller"), first introduced in November 2010, was upgraded for the 2013 release of the [Xbox One](/wiki/Xbox_One "Xbox One") video game console. Kinect's capabilities were revealed in May 2013: an ultra-wide 1080p camera, function in the dark due to an infrared sensor, higher-end processing power and new software, the ability to distinguish between fine movements (such as a thumb movement), and determining a user's heart rate by looking at their face.[[93]](#cite_note-93) Microsoft filed a patent application in 2011 that suggests that the corporation may use the Kinect camera system to monitor the behavior of television viewers as part of a plan to make the viewing experience more interactive. On July 19, 2013, Microsoft stocks suffered their biggest one-day percentage sell-off since the year 2000, after its fourth-quarter report raised concerns among investors on the poor showings of both Windows 8 and the Surface tablet. Microsoft suffered a loss of more than US$32 billion.[[94]](#cite_note-94)

In line with the maturing PC business, in July 2013, Microsoft announced that it would reorganize the business into four new business divisions, namely Operating systems, Apps, Cloud, and Devices. All previous divisions will be dissolved into new divisions without any workforce cuts.[[95]](#cite_note-95) On September 3, 2013, Microsoft agreed to buy [Nokia](/wiki/Nokia "Nokia")'s mobile unit for $7 billion,[[96]](#cite_note-96) following [Amy Hood](/wiki/Amy_Hood "Amy Hood") taking the role of CFO.[[97]](#cite_note-97)

### 2014–2020: Windows 10, Microsoft Edge, and HoloLens

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Satya_smiling-print.jpg/220px-Satya_smiling-print.jpg)](/wiki/File%3ASatya_smiling-print.jpg)

[Satya Nadella](/wiki/Satya_Nadella "Satya Nadella") succeeded [Steve Ballmer](/wiki/Steve_Ballmer "Steve Ballmer") as the [CEO](/wiki/Chief_executive_officer "Chief executive officer") of Microsoft in February 2014.

On February 4, 2014, [Steve Ballmer](/wiki/Steve_Ballmer "Steve Ballmer") stepped down as [CEO](/wiki/Chief_executive_officer "Chief executive officer") of Microsoft and was succeeded by [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella"), who previously led Microsoft's Cloud and Enterprise division.[[98]](#cite_note-98) On the same day, [John W. Thompson](/wiki/John_W._Thompson "John W. Thompson") took on the role of chairman, in place of Bill Gates, who continued to participate as a technology advisor.[[99]](#cite_note-chairex-99) Thompson became the second chairman in Microsoft's history.[[100]](#cite_note-100) On April 25, 2014, Microsoft acquired Nokia Devices and Services for $7.2 billion.[[101]](#cite_note-101) This new subsidiary was renamed Microsoft Mobile Oy.[[102]](#cite_note-102) On September 15, 2014, Microsoft acquired the video game development company [Mojang](/wiki/Mojang "Mojang"), best known for *[Minecraft](/wiki/Minecraft "Minecraft")*, for $2.5 billion.[[103]](#cite_note-103) On June 8, 2017, Microsoft acquired [Hexadite](/wiki/Hexadite "Hexadite"), an Israeli security firm, for $100 million.[[104]](#cite_note-104)[[105]](#cite_note-105)

On January 21, 2015, Microsoft announced the release of their first [Interactive whiteboard](/wiki/Interactive_whiteboard "Interactive whiteboard"), [Microsoft Surface Hub](/wiki/Surface_Hub "Surface Hub").[[106]](#cite_note-106) On July 29, 2015, [Windows 10](/wiki/Windows_10 "Windows 10") was released,[[107]](#cite_note-107) with its server sibling, [Windows Server 2016](/wiki/Windows_Server_2016 "Windows Server 2016"), released in September 2016. In Q1 2015, Microsoft was the third largest maker of mobile phones, selling 33 million units (7.2% of all). While a large majority (at least 75%) of them do not run any version of [Windows Phone](/wiki/Windows_Phone "Windows Phone")— those other phones are not categorized as [smartphones](/wiki/Smartphone "Smartphone") by Gartner – in the same time frame 8 million Windows smartphones (2.5% of all smartphones) were made by all manufacturers (but mostly by Microsoft).[[108]](#cite_note-108) Microsoft's share of the U.S. smartphone market in January 2016 was 2.7%.[[109]](#cite_note-109) During the summer of 2015 the company lost $7.6 billion related to its mobile-phone business, firing 7,800 employees.[[110]](#cite_note-WSJ:_Microsoft_to_Streamline_Smartphone_Hardware_Business-110)

On March 1, 2016, Microsoft announced the merger of its PC and Xbox divisions, with [Phil Spencer](/wiki/Phil_Spencer_%28business_executive%29 "Phil Spencer (business executive)") announcing that Universal Windows Platform (UWP) apps would be the focus for Microsoft's gaming in the future.[[111]](#cite_note-111) On January 24, 2017, Microsoft showcased Intune for Education at the [BETT](/wiki/BETT "BETT") 2017 education technology conference in [London](/wiki/London "London").[[112]](#cite_note-112) Intune for Education is a new cloud-based application and device management service for the education sector.[[113]](#cite_note-113) In May 2016, the company announced it was laying off 1,850 workers, and taking an impairment and restructuring charge of $950 million.[[110]](#cite_note-WSJ:_Microsoft_to_Streamline_Smartphone_Hardware_Business-110)

In June 2016, Microsoft announced a project named Microsoft Azure Information Protection. It aims to help enterprises protect their data as it moves between servers and devices.[[114]](#cite_note-114) In November 2016, Microsoft joined the [Linux Foundation](/wiki/Linux_Foundation "Linux Foundation") as a Platinum member during Microsoft's Connect(); developer event in New York.[[115]](#cite_note-115) The cost of each Platinum membership is US$500,000 per year.[[116]](#cite_note-116) Some analysts deemed this unthinkable ten years prior, however, as in 2001 then-CEO Steve Ballmer called Linux "cancer".[[117]](#cite_note-117) Microsoft planned to launch a preview of Intune for Education "in the coming weeks," with general availability scheduled for spring 2017, priced at $30 per device, or through volume licensing agreements.[[118]](#cite_note-118)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Nokia_%26_Microsoft_Lumia_devices.png/220px-Nokia_%26_Microsoft_Lumia_devices.png)](/wiki/File%3ANokia_%26_Microsoft_Lumia_devices.png)

The [Nokia Lumia 1320](/wiki/Nokia_Lumia_1320 "Nokia Lumia 1320"), the [Microsoft Lumia 535](/wiki/Microsoft_Lumia_535 "Microsoft Lumia 535") and the [Nokia Lumia 530](/wiki/Nokia_Lumia_530 "Nokia Lumia 530"), which all run on one of the now-discontinued [Windows Phone](/wiki/Windows_Phone "Windows Phone") operating systems

In January 2018, Microsoft patched [Windows 10](/wiki/Windows_10 "Windows 10") to account for CPU problems related to [Intel's Meltdown security breach](/wiki/Meltdown_%28security_vulnerability%29 "Meltdown (security vulnerability)"). The patch led to issues with the [Microsoft Azure](/wiki/Microsoft_Azure "Microsoft Azure") virtual machines reliant on Intel's CPU architecture. On January 12, Microsoft released [PowerShell Core 6.0](/wiki/PowerShell "PowerShell") for the [macOS](/wiki/MacOS "MacOS") and [Linux](/wiki/Linux "Linux") operating systems.[[119]](#cite_note-auto-119) In February 2018, Microsoft killed notification support for their [Windows Phone](/wiki/Windows_Phone "Windows Phone") devices which effectively ended firmware updates for the discontinued devices.[[119]](#cite_note-auto-119) In March 2018, Microsoft recalled [Windows 10 S](/wiki/Windows_10_editions#Discontinued_editions "Windows 10 editions") to change it to a mode for the Windows operating system rather than a separate and unique operating system. In March the company also established guidelines that censor users of [Office 365](/wiki/Office_365 "Office 365") from using [profanity](/wiki/Profanity "Profanity") in private documents.[[119]](#cite_note-auto-119)

In April 2018, Microsoft released the source code for Windows [File Manager](/wiki/File_Manager_%28Windows%29 "File Manager (Windows)") under the [MIT License](/wiki/MIT_License "MIT License") to celebrate the program's 20th anniversary. In April the company further expressed willingness to embrace open source initiatives by announcing [Azure Sphere](/wiki/Azure_Sphere "Azure Sphere") as its own derivative of the [Linux](/wiki/Linux "Linux") operating system.[[119]](#cite_note-auto-119) In May 2018, Microsoft partnered with 17 American intelligence agencies to develop [cloud computing](/wiki/Cloud_computing "Cloud computing") products. The project is dubbed "Azure Government" and has ties to the [Joint Enterprise Defense Infrastructure](/wiki/Joint_Enterprise_Defense_Infrastructure "Joint Enterprise Defense Infrastructure") (JEDI) surveillance program.[[119]](#cite_note-auto-119) On June 4, 2018, Microsoft officially announced the acquisition of [GitHub](/wiki/GitHub "GitHub") for $7.5 billion, a deal that closed on October 26, 2018.[[120]](#cite_note-120)[[121]](#cite_note-121) On July 10, 2018, Microsoft revealed the [Surface Go](/wiki/Microsoft_Surface_Go "Microsoft Surface Go") platform to the public. Later in the month, it converted [Microsoft Teams](/wiki/Microsoft_Teams "Microsoft Teams") to [gratis](/wiki/Gratis_versus_libre "Gratis versus libre").[[119]](#cite_note-auto-119) In August 2018, Microsoft released two projects called Microsoft AccountGuard and Defending Democracy. It also unveiled [Snapdragon 850](/wiki/Qualcomm_Snapdragon "Qualcomm Snapdragon") compatibility for [Windows 10](/wiki/Windows_10 "Windows 10") on the [ARM architecture](/wiki/ARM_architecture "ARM architecture").[[122]](#cite_note-122)[[123]](#cite_note-123)[[119]](#cite_note-auto-119)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Apollo_11_astronaut_Buzz_Aldrin_tries_out_Microsoft_HoloLens_%2829794543715%29.jpg/170px-Apollo_11_astronaut_Buzz_Aldrin_tries_out_Microsoft_HoloLens_%2829794543715%29.jpg)](/wiki/File%3AApollo_11_astronaut_Buzz_Aldrin_tries_out_Microsoft_HoloLens_%2829794543715%29.jpg)

[Apollo 11](/wiki/Apollo_11 "Apollo 11") astronaut [Buzz Aldrin](/wiki/Buzz_Aldrin "Buzz Aldrin") using a [Microsoft HoloLens](/wiki/Microsoft_HoloLens "Microsoft HoloLens") mixed reality headset in September 2016

In August 2018, [Toyota Tsusho](/wiki/Toyota_Tsusho "Toyota Tsusho") began a partnership with Microsoft to create [fish farming](/wiki/Fish_farming "Fish farming") tools using the Microsoft Azure application suite for [Internet of things](/wiki/Internet_of_things "Internet of things") (IoT) technologies related to water management. Developed in part by researchers from [Kindai University](/wiki/Kindai_University "Kindai University"), the water pump mechanisms use [artificial intelligence](/wiki/Artificial_intelligence "Artificial intelligence") to count the number of fish on a [conveyor belt](/wiki/Conveyor_belt "Conveyor belt"), analyze the number of fish, and deduce the effectiveness of water flow from the data the fish provide. The specific [computer programs](/wiki/Computer_program "Computer program") used in the process fall under the Azure Machine Learning and the Azure IoT Hub platforms.[[124]](#cite_note-124)

In September 2018, Microsoft discontinued [Skype Classic](/wiki/Skype "Skype").[[119]](#cite_note-auto-119) On October 10, 2018, Microsoft joined the [Open Invention Network](/wiki/Open_Invention_Network "Open Invention Network") community despite holding more than 60,000 patents.[[125]](#cite_note-125) In November 2018, Microsoft agreed to supply 100,000 [Microsoft HoloLens](/wiki/Microsoft_HoloLens "Microsoft HoloLens") headsets to the [United States military](/wiki/United_States_Armed_Forces "United States Armed Forces") in order to "increase lethality by enhancing the ability to detect, decide and engage before the enemy."[[126]](#cite_note-126) In November 2018, Microsoft introduced Azure Multi-Factor Authentication for Microsoft Azure.[[127]](#cite_note-R1BDM-127) In December 2018, Microsoft announced [Project Mu](/wiki/Project_Mu "Project Mu"), an [open source](/wiki/Open_source "Open source") release of the [Unified Extensible Firmware Interface](/wiki/Unified_Extensible_Firmware_Interface "Unified Extensible Firmware Interface") (UEFI) core used in [Microsoft Surface](/wiki/Microsoft_Surface "Microsoft Surface") and [Hyper-V](/wiki/Hyper-V "Hyper-V") products. The project promotes the idea of [Firmware as a Service](/wiki/Project_Mu "Project Mu").[[128]](#cite_note-128) In the same month, Microsoft announced the [open source](/wiki/Open_source "Open source") implementation of [Windows Forms](/wiki/Windows_Forms "Windows Forms") and the [Windows Presentation Foundation](/wiki/Windows_Presentation_Foundation "Windows Presentation Foundation") (WPF) which will allow for further movement of the company toward the transparent release of key frameworks used in developing Windows desktop applications and software. December also saw the company discontinue the [Microsoft Edge](/wiki/Microsoft_Edge "Microsoft Edge") project in favor of [Chromium](/wiki/Chromium_%28web_browser%29 "Chromium (web browser)") backends for their browsers.[[127]](#cite_note-R1BDM-127)

On February 20, 2019, Microsoft Corp said it will offer its cyber security service AccountGuard to 12 new markets in Europe including Germany, France and Spain, to close security gaps and protect customers in political space from hacking.[[129]](#cite_note-129) In February 2019, hundreds of Microsoft employees protested the company's [war profiteering](/wiki/War_profiteering "War profiteering") from a $480 million contract to develop [virtual reality headsets](/wiki/Virtual_reality_headset "Virtual reality headset") for the [United States Army](/wiki/United_States_Army "United States Army").[[130]](#cite_note-130)

### 2020–present: Acquisitions, Xbox Series X/S, and Windows 11

See also: [Acquisition of Activision Blizzard by Microsoft](/wiki/Acquisition_of_Activision_Blizzard_by_Microsoft "Acquisition of Activision Blizzard by Microsoft")

On March 26, 2020, Microsoft announced it was acquiring Affirmed Networks for about $1.35 billion.[[131]](#cite_note-131)[[132]](#cite_note-132) Due to the [COVID-19 pandemic](/wiki/COVID-19_pandemic "COVID-19 pandemic"), Microsoft closed all of its retail stores indefinitely due to health concerns.[[133]](#cite_note-133) On July 22, 2020, Microsoft announced plans to close its [Mixer](/wiki/Mixer_%28service%29 "Mixer (service)") service, planning to move existing partners to [Facebook Gaming](/wiki/Facebook_Gaming "Facebook Gaming").[[134]](#cite_note-134)

On July 31, 2020, it was reported that Microsoft was in talks to acquire [TikTok](/wiki/TikTok "TikTok") after the [Trump administration](/wiki/Presidency_of_Donald_Trump "Presidency of Donald Trump") ordered [ByteDance](/wiki/ByteDance "ByteDance") to [divest](/wiki/Divestment "Divestment") ownership of the application to the U.S.[[135]](#cite_note-135) On August 3, 2020, after speculation on the deal, [Donald Trump](/wiki/Donald_Trump "Donald Trump") stated that Microsoft could buy the application, however, it should be completed by September 15, 2020, and that the [United States Department of the Treasury](/wiki/United_States_Department_of_the_Treasury "United States Department of the Treasury") should receive a portion if it were to go through.[[136]](#cite_note-136)

On August 5, 2020, Microsoft stopped its [xCloud](/wiki/XCloud "XCloud") game streaming test for [iOS devices](/wiki/List_of_iOS_devices "List of iOS devices"). According to Microsoft, the future of xCloud on iOS remains unclear and potentially out of Microsoft's hands. [Apple](/wiki/Apple_Inc. "Apple Inc.") has imposed a strict limit on ["remote desktop clients"](/wiki/Remote_Desktop_Services "Remote Desktop Services") which means applications are only allowed to connect to a user-owned host device or gaming console owned by the user.[[137]](#cite_note-137) On September 21, 2020, Microsoft announced its intent to acquire video game company [ZeniMax Media](/wiki/ZeniMax_Media "ZeniMax Media"), the parent company of [Bethesda Softworks](/wiki/Bethesda_Softworks "Bethesda Softworks"), for about $7.5 billion, with the deal expected to occur in the second half of 2021 fiscal year.[[138]](#cite_note-138) On March 9, 2021, the acquisition was finalized and ZeniMax Media became part of Microsoft's Xbox Game Studios division.[[139]](#cite_note-139) The total price of the deal was $8.1 billion.[[140]](#cite_note-140)

On September 22, 2020, Microsoft announced that it had an exclusive license to use [OpenAI](/wiki/OpenAI "OpenAI")'s GPT-3 artificial intelligence language generator.[[141]](#cite_note-141) The previous version of [GPT-3](/wiki/GPT-3 "GPT-3"), called [GPT-2](/wiki/GPT-2 "GPT-2"), made headlines for being "too dangerous to release" and had numerous capabilities, including designing websites, prescribing medication, answering questions, and penning articles.[[142]](#cite_note-142)

On November 10, 2020, Microsoft released the [Xbox Series X and Xbox Series S](/wiki/Xbox_Series_X_and_Series_S "Xbox Series X and Series S") video game consoles.[[143]](#cite_note-143)

In April 2021, Microsoft announced it would buy [Nuance Communications](/wiki/Nuance_Communications "Nuance Communications") for approximately $16 billion.[[144]](#cite_note-144) The acquisition of Nuance was completed in March 2022.[[145]](#cite_note-145) In 2021, in part due to the strong quarterly earnings spurred by the [COVID-19 pandemic](/wiki/COVID-19_pandemic "COVID-19 pandemic"), Microsoft's valuation came to nearly $2 trillion. The increased necessity for [remote work](/wiki/Remote_work "Remote work") and [distance education](/wiki/Distance_education "Distance education") drove demand for [cloud computing](/wiki/Cloud_computing "Cloud computing") and grew the company's gaming sales.[[146]](#cite_note-146)[[147]](#cite_note-147)[[148]](#cite_note-148)

On June 24, 2021, Microsoft announced [Windows 11](/wiki/Windows_11 "Windows 11") during a Livestream. The announcement came with confusion after Microsoft announced Windows 10 would be the last version of the operating system; set to be released in the third quarter of 2021.[[149]](#cite_note-149) It was released to the general public on October 5, 2021.[[150]](#cite_note-150)

In September 2021, it was announced that the company had acquired Takelessons, an online platform that connects students and tutors in numerous subjects. The acquisition positioned Microsoft to grow its presence in the market of providing online education to large numbers of people.[[151]](#cite_note-151) In the same month, Microsoft acquired Australia-based video editing software company [Clipchamp](/wiki/Clipchamp "Clipchamp").[[152]](#cite_note-152)

In October 2021, Microsoft announced that it began rolling out end-to-end encryption (E2EE) support for Microsoft Teams calls in order to secure business communication while using video conferencing software. Users can ensure that their calls are encrypted and can utilize a security code that both parties on a call must verify on their respective ends.[[153]](#cite_note-153) On October 7, Microsoft acquired Ally.io, a software service that measures companies' progress against [OKRs](/wiki/OKR "OKR"). Microsoft plans to incorporate Ally.io into its Viva family of employee experience products.[[154]](#cite_note-154)

On January 18, 2022, Microsoft announced the acquisition of American video game developer and [holding company](/wiki/Holding_company "Holding company") [Activision Blizzard](/wiki/Activision_Blizzard "Activision Blizzard") in an all-cash deal worth $68.7 billion.[[155]](#cite_note-:0-155) Activision Blizzard is best known for producing franchises, including but not limited to *[Warcraft](/wiki/Warcraft "Warcraft")*, *[Diablo](/wiki/Diablo_%28series%29 "Diablo (series)")*, *[Call of Duty](/wiki/Call_of_Duty "Call of Duty")*, *[StarCraft](/wiki/StarCraft "StarCraft")*, *[Candy Crush Saga](/wiki/Candy_Crush_Saga "Candy Crush Saga")*, *[Crash Bandicoot](/wiki/Crash_Bandicoot "Crash Bandicoot")*, *[Spyro](/wiki/Spyro "Spyro")*, *[Tony Hawk's](/wiki/Tony_Hawk%27s "Tony Hawk's")*, *[Guitar Hero](/wiki/Guitar_Hero "Guitar Hero")*, and *[Overwatch](/wiki/Overwatch "Overwatch")*.[[156]](#cite_note-156) Activision and Microsoft each released statements saying the acquisition was to benefit their businesses in the [metaverse](/wiki/Metaverse "Metaverse"), many saw Microsoft's acquisition of video game studios as an attempt to compete against [Meta Platforms](/wiki/Meta_Platforms "Meta Platforms"), with *[TheStreet](/wiki/TheStreet "TheStreet")* referring to Microsoft wanting to become "the [Disney](/wiki/The_Walt_Disney_Company "The Walt Disney Company") of the metaverse".[[157]](#cite_note-157)[[158]](#cite_note-158) Microsoft also named [Phil Spencer](/wiki/Phil_Spencer_%28business_executive%29 "Phil Spencer (business executive)"), head of the Xbox brand since 2014, the inaugural CEO of the newly established [Microsoft Gaming](/wiki/Microsoft_Gaming "Microsoft Gaming") division, which now houses the Xbox operations team and the three publishers in the company's portfolio (Xbox Game Studios, ZeniMax Media, Activision Blizzard). Microsoft has not released statements regarding Activision's recent legal controversies regarding employee abuse, but reports have alleged that Activision CEO [Bobby Kotick](/wiki/Bobby_Kotick "Bobby Kotick"), a major target of the controversy, will leave the company after the acquisition is finalized.[[159]](#cite_note-159) The deal was closed on October 13, 2023.[[160]](#cite_note-160)

In December 2022, Microsoft announced a new 10-year deal with the London Stock Exchange for products including Microsoft Azure; Microsoft acquired ~4% of the LSE as part of the deal.[[161]](#cite_note-161)

In January 2023, CEO Satya Nadella announced Microsoft would lay off some 10,000 employees.[[162]](#cite_note-162) The announcement came a day after hosting a [Sting](/wiki/Sting_%28musician%29 "Sting (musician)") concert for 50 people, including Microsoft executives, in [Davos](/wiki/Davos "Davos"), Switzerland.[[163]](#cite_note-163)

On January 23, 2023, Microsoft announced a new multi-year, multi-billion dollar investment deal with [ChatGPT](/wiki/ChatGPT "ChatGPT") developer [OpenAI](/wiki/OpenAI "OpenAI").[[164]](#cite_note-164)

At a November 2023 developer conference, Microsoft announced two new custom-designed computing chips: The Maia chip, designed to run large language models, and Cobalt CPU, designed to power general cloud services on Azure.[[165]](#cite_note-165)[[166]](#cite_note-166)

On November 20, 2023, Satya Nadella announced the former
[OpenAI](/wiki/OpenAI "OpenAI") CEO [Sam Altman](/wiki/Sam_Altman "Sam Altman") and former president and Chairman of [Greg Brockman](/wiki/Greg_Brockman "Greg Brockman") will be joining Microsoft to lead a new advanced AI research team.[[167]](#cite_note-167)[[168]](#cite_note-168)

In January 2024, Microsoft became the most valued publicly traded company. Meanwhile, that month, the company announced a subscription offering of artificial intelligence for small businesses via Copilot Pro. [[169]](#cite_note-169)[[170]](#cite_note-170)

## Corporate affairs

See also: [Criticism of Microsoft](/wiki/Criticism_of_Microsoft "Criticism of Microsoft"); [Internet censorship in China](/wiki/Internet_censorship_in_China "Internet censorship in China"); and [Embrace, extend, and extinguish](/wiki/Embrace%2C_extend%2C_and_extinguish "Embrace, extend, and extinguish")

### Board of directors

The company is run by a [board of directors](/wiki/Board_of_directors "Board of directors") made up of mostly company outsiders, as is customary for publicly traded companies. Members of the board of directors as of December 2023 are [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella"), [Reid Hoffman](/wiki/Reid_Hoffman "Reid Hoffman"), Hugh Johnston, Teri List, [Sandi Peterson](/wiki/Sandi_Peterson "Sandi Peterson"), [Penny Pritzker](/wiki/Penny_Pritzker "Penny Pritzker"), Carlos Rodriguez, [Charles Scharf](/wiki/Charles_Scharf "Charles Scharf"), [John W. Stanton](/wiki/John_W._Stanton "John W. Stanton"), [John W. Thompson](/wiki/John_W._Thompson "John W. Thompson"), [Emma Walmsley](/wiki/Emma_Walmsley "Emma Walmsley") and [Padmasree Warrior](/wiki/Padmasree_Warrior "Padmasree Warrior").[[171]](#cite_note-171)

Board members are elected every year at the annual shareholders' meeting using a majority vote system. There are four committees within the board that oversee more specific matters. These committees include the Audit Committee, which handles accounting issues with the company including auditing and reporting; the Compensation Committee, which approves compensation for the CEO and other employees of the company; the Governance and Nominating Committee, which handles various corporate matters including the nomination of the board; and the Regulatory and Public Policy Committee, which includes legal/antitrust matters, along with privacy, trade, digital safety, artificial intelligence, and environmental sustainability.[[172]](#cite_note-172)

On March 13, 2020, Gates announced that he is leaving the board of directors of Microsoft and [Berkshire Hathaway](/wiki/Berkshire_Hathaway "Berkshire Hathaway") to focus more on his philanthropic efforts. According to Aaron Tilley of *[The Wall Street Journal](/wiki/The_Wall_Street_Journal "The Wall Street Journal")* this is "marking the biggest boardroom departure in the tech industry since the death of longtime rival and Apple Inc. co-founder [Steve Jobs](/wiki/Steve_Jobs "Steve Jobs")."[[173]](#cite_note-173)

On January 13, 2022, *The Wall Street Journal* reported that Microsoft's board of directors plans to hire an external [law firm](/wiki/Law_firm "Law firm") to review its [sexual harassment](/wiki/Sexual_harassment "Sexual harassment") and [gender discrimination](/wiki/Gender_discrimination "Gender discrimination") policies, and to release a summary of how the company handled past allegations of misconduct against Bill Gates and other corporate executives.[[174]](#cite_note-174)

### Chief executives

1. [Bill Gates](/wiki/Bill_Gates "Bill Gates") (1975–2000)
2. [Steve Ballmer](/wiki/Steve_Ballmer "Steve Ballmer") (2000–2014)
3. [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella") (2014–present)

### Financial

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Microsoft_5-Year_Stock_History.svg/350px-Microsoft_5-Year_Stock_History.svg.png)](/wiki/File%3AMicrosoft_5-Year_Stock_History.svg)

Five year history graph of [Nasdaq](/wiki/Nasdaq "Nasdaq"): [MSFT](https://www.nasdaq.com/market-activity/stocks/msft) stock on July 17, 2013[[175]](#cite_note-175)

When Microsoft went public and launched its [initial public offering](/wiki/Initial_public_offering "Initial public offering") (IPO) in 1986, the opening [stock](/wiki/Stock "Stock") price was $21; after the [trading day](/wiki/Trading_day "Trading day"), the price closed at $27.75. As of July 2010, with the company's nine [stock splits](/wiki/Stock_split "Stock split"), any IPO [shares](/wiki/Share_%28finance%29 "Share (finance)") would be multiplied by 288; if one were to buy the IPO today, given the splits and other factors, it would cost about 9 cents.[[14]](#cite_note-Allan_2001-14): 235–236[[176]](#cite_note-176)[[177]](#cite_note-177) The stock price peaked in 1999 at around $119 ($60.928, adjusting for splits).[[178]](#cite_note-stocksheet-178) The company began to offer a [dividend](/wiki/Dividend "Dividend") on January 16, 2003, starting at eight cents per share for the fiscal year followed by a dividend of sixteen cents per share the subsequent year, switching from yearly to quarterly dividends in 2005 with eight cents a share per quarter and a [special one-time payout](/wiki/Special_dividend "Special dividend") of three dollars per share for the second quarter of the fiscal year.[[178]](#cite_note-stocksheet-178)[[179]](#cite_note-dividendfaq-179) Though the company had subsequent increases in dividend payouts, the price of Microsoft's stock remained steady for years.[[179]](#cite_note-dividendfaq-179)[[180]](#cite_note-180)

[Standard & Poor's](/wiki/Standard_%26_Poor%27s "Standard & Poor's") and [Moody's Investors Service](/wiki/Moody%27s_Investors_Service "Moody's Investors Service") have both given a AAA rating to Microsoft, whose assets were valued at $41 billion as compared to only $8.5 billion in unsecured debt. Consequently, in February 2011 Microsoft released a corporate bond amounting to $2.25 billion with relatively low borrowing rates compared to [government bonds](/wiki/Government_bond "Government bond").[[181]](#cite_note-181) For the first time in 20 years [Apple Inc.](/wiki/Apple_Inc. "Apple Inc.") surpassed Microsoft in Q1 2011 quarterly profits and revenues due to a slowdown in PC sales and continuing huge losses in Microsoft's Online Services Division (which contains its search engine [Bing](/wiki/Bing_%28search_engine%29 "Bing (search engine)")). Microsoft profits were $5.2 billion, while Apple Inc. profits were $6 billion, on revenues of $14.5 billion and $24.7 billion respectively.[[182]](#cite_note-182) Microsoft's Online Services Division has been continuously loss-making since 2006 and in Q1 2011 it lost $726 million. This follows a loss of $2.5 billion for the year 2010.[[183]](#cite_note-183)

Sales by region (2023)[[184]](#cite_note-:1-184)

| Region | Sales in billion $ | share |
| --- | --- | --- |
| United States | 106.7 | 50.4% |
| Other countries | 105.2 | 49.6% |

On July 20, 2012, Microsoft posted its first quarterly loss ever, despite earning record revenues for the quarter and fiscal year, with a net loss of $492 million due to a [writedown](/wiki/Write-off#Write-down "Write-off") related to the advertising company [aQuantive](/wiki/AQuantive "AQuantive"), which had been acquired for $6.2 billion back in 2007.[[185]](#cite_note-185) As of January 2014, Microsoft's market capitalization stood at $314B,[[186]](#cite_note-186) making it the 8th largest company in the world by market capitalization.[[187]](#cite_note-187) On November 14, 2014, Microsoft overtook [ExxonMobil](/wiki/ExxonMobil "ExxonMobil") to become the second most-valuable company by market capitalization, behind only [Apple Inc.](/wiki/Apple_Inc. "Apple Inc.") Its total market value was over $410B—with the stock price hitting $50.04 a share, the highest since early 2000.[[188]](#cite_note-188) In 2015, [Reuters](/wiki/Reuters "Reuters") reported that Microsoft Corp had earnings abroad of $76.4 billion which were untaxed by the [Internal Revenue Service](/wiki/Internal_Revenue_Service "Internal Revenue Service"). Under U.S. law, corporations do not pay income tax on overseas profits until the profits are brought into the United States.[[189]](#cite_note-189)

| Year | Revenue in million US$[[190]](#cite_note-microsoft.com-190) | Net income in million US$[[190]](#cite_note-microsoft.com-190) | Total Assets in million US$[[190]](#cite_note-microsoft.com-190) | Employees[[191]](#cite_note-:2-191) |
| --- | --- | --- | --- | --- |
| 2005 | 39,788 | 12,254 | 70,815 | 61,000 |
| 2006 | 44,282 | 12,599 | 69,597 | 71,000 |
| 2007 | 51,122 | 14,065 | 63,171 | 79,000 |
| 2008 | 60,420 | 17,681 | 72,793 | 91,000 |
| 2009 | 58,437 | 14,569 | 77,888 | 93,000 |
| 2010 | 62,484 | 18,760 | 86,113 | 89,000 |
| 2011 | 69,943 | 23,150 | 108,704 | 90,000 |
| 2012 | 73,723 | 16,978 | 121,271 | 94,000 |
| 2013 | 77,849 | 21,863 | 142,431 | 99,000 |
| 2014 | 86,833 | 22,074 | 172,384 | 128,000 |
| 2015 | 93,580 | 12,193 | 174,472 | 118,000 |
| 2016 | 91,154 | 20,539 | 193,468 | 114,000 |
| 2017 | 96,571 | 25,489 | 250,312 | 124,000 |
| 2018 | 110,360 | 16,571 | 258,848 | 131,000 |
| 2019 | 125,843 | 39,240 | 286,556 | 144,106 |
| 2020 | 143,015 | 44,281 | 301,311 | 163,000 |
| 2021 | 168,088 | 61,271 | 333,779 | 181,000 |
| 2022 | 198,270 | 72,738 | 364,840 | 221,000 |
| 2023 | 211,915 | 73,307 | 411,976 | 238,000 |

In November 2018, the company won a $480 million military contract with the U.S. government to bring [augmented reality](/wiki/Augmented_reality "Augmented reality") (AR) headset technology into the weapon repertoires of American soldiers. The two-year contract may result in follow-on orders of more than 100,000 headsets, according to documentation describing the bidding process. One of the contract's tag lines for the augmented reality technology seems to be its ability to enable "25 bloodless battles before the 1st battle," suggesting that actual combat training is going to be an essential aspect of the augmented reality headset capabilities.[[192]](#cite_note-192)

### Subsidiaries

Microsoft is an international business. As such, it needs subsidiaries present in whatever national markets it chooses to harvest. An example is Microsoft Canada, which it established in 1985.[[193]](#cite_note-mcan-193) Other countries have similar installations, to funnel profits back up to Redmond and to distribute the dividends to the holders of MSFT stock.

### Ownership

The 10 largest shareholder of Microsoft in early 2024 were:[[184]](#cite_note-:1-184)

| Shareholder name | Percentage |
| --- | --- |
| [The Vanguard Group](/wiki/The_Vanguard_Group "The Vanguard Group") | 8.9% |
| [BlackRock](/wiki/BlackRock "BlackRock") | 5.6% |
| [State Street Corporation](/wiki/State_Street_Corporation "State Street Corporation") | 4.0% |
| [Fidelity Investments](/wiki/Fidelity_Investments "Fidelity Investments") | 2.9% |
| [Geode Capital Management](/wiki/Geode_Capital_Management "Geode Capital Management") | 2.1% |
| [T. Rowe Price International](/wiki/T._Rowe_Price "T. Rowe Price") | 1.9% |
| [Eaton Vance](/wiki/Eaton_Vance "Eaton Vance") | 1.7% |
| [JP Morgan Investment Management](/wiki/JP_Morgan "JP Morgan") | 1.6% |
| [Bill Gates](/wiki/Bill_Gates "Bill Gates") | 1.4% |
| [BlackRock Life](/wiki/BlackRock "BlackRock") | 1.4% |
| Others | 68.5% |

### Marketing

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Windows_8_Launch_Event_in_Akihabara%2C_Tokyo.jpg/220px-Windows_8_Launch_Event_in_Akihabara%2C_Tokyo.jpg)](/wiki/File%3AWindows_8_Launch_Event_in_Akihabara%2C_Tokyo.jpg)

[Windows 8](/wiki/Windows_8 "Windows 8") Launch Event in [Akihabara](/wiki/Akihabara "Akihabara"), Tokyo on October 25, 2012

In 2004, Microsoft commissioned research firms to do independent studies comparing the [total cost of ownership](/wiki/Total_cost_of_ownership "Total cost of ownership") (TCO) of [Windows Server 2003](/wiki/Windows_Server_2003 "Windows Server 2003") to [Linux](/wiki/Linux "Linux"); the firms concluded that companies found Windows easier to administrate than Linux, thus those using Windows would administrate faster resulting in lower costs for their company (i.e. lower TCO).[[194]](#cite_note-194) This spurred a wave of related studies; a study by the [Yankee Group](/wiki/Yankee_Group "Yankee Group") concluded that upgrading from one version of Windows Server to another costs a fraction of the [switching costs](/wiki/Switching_barriers "Switching barriers") from Windows Server to Linux, although companies surveyed noted the increased security and reliability of Linux servers and concern about being locked into using Microsoft products.[[195]](#cite_note-195) Another study, released by the [Open Source Development Labs](/wiki/Open_Source_Development_Labs "Open Source Development Labs"), claimed that the Microsoft studies were "simply outdated and one-sided" and their survey concluded that the TCO of Linux was lower due to Linux administrators managing more servers on average and other reasons.[[196]](#cite_note-196)

As part of the "Get the Facts" campaign, Microsoft highlighted the [.NET Framework](/wiki/.NET_Framework ".NET Framework") trading platform that it had developed in partnership with [Accenture](/wiki/Accenture "Accenture") for the [London Stock Exchange](/wiki/London_Stock_Exchange "London Stock Exchange"), claiming that it provided "[five nines](/wiki/High_availability "High availability")" reliability. After suffering extended downtime and unreliability[[197]](#cite_note-197)[[198]](#cite_note-198) the London Stock Exchange announced in 2009 that it was planning to drop its Microsoft solution and switch to a Linux-based one in 2010.[[199]](#cite_note-199)[[200]](#cite_note-200)

In 2012, Microsoft hired a political pollster named Mark Penn, whom *The New York Times* called "famous for bulldozing" his political opponents[[201]](#cite_note-201) as Executive Vice-president, Advertising and Strategy. Penn created a series of negative advertisements targeting one of Microsoft's chief competitors, [Google](/wiki/Google "Google"). The advertisements, called "[Scroogled](/wiki/Scroogled "Scroogled")," attempt to make the case that Google is "screwing" consumers with search results rigged to favor Google's paid advertisers, that [Gmail](/wiki/Gmail "Gmail") violates the privacy of its users to place ad results related to the content of their emails and shopping results, which favor Google products. Tech publications like TechCrunch have been highly critical of the advertising campaign,[[202]](#cite_note-202) while Google employees have embraced it.[[203]](#cite_note-203)

### Layoffs

In July 2014, Microsoft announced plans to lay off 18,000 employees. Microsoft employed 127,104 people as of June 5, 2014, making this about a 14 percent reduction of its workforce as the biggest Microsoft layoff ever. This included 12,500 professional and factory personnel. Previously, Microsoft had eliminated 5,800 jobs in 2009 in line with the [Great Recession](/wiki/Great_Recession "Great Recession") of 2008–2017.[[204]](#cite_note-204)[[205]](#cite_note-205) In September 2014, Microsoft laid off 2,100 people, including 747 people in the Seattle–Redmond area, where the company is headquartered. The firings came as a second wave of the layoffs that were previously announced. This brought the total number to over 15,000 out of the 18,000 expected cuts.[[206]](#cite_note-206) In October 2014, Microsoft revealed that it was almost done with eliminating 18,000 employees, which was its largest-ever layoff sweep.[[207]](#cite_note-207) In July 2015, Microsoft announced another 7,800 job cuts in the next several months.[[208]](#cite_note-208) In May 2016, Microsoft announced another 1,850 job cuts mostly in its Nokia mobile phone division. As a result, the company will record an impairment and restructuring charge of approximately $950 million, of which approximately $200 million will relate to severance payments.[[209]](#cite_note-209)

Microsoft laid off 1,900 employees in its gaming division in January 2024. The layoffs primarily affected Activision Blizzard employees, but some Xbox and ZeniMax employees were also affected.[[210]](#cite_note-210) Blizzard president Mike Ybarra and Blizzard's chief design officer Allen Adham also resigned.[[211]](#cite_note-211)

### United States government

Microsoft provides information about reported bugs in their software to intelligence agencies of the United States government, prior to the public release of the fix. A Microsoft spokesperson has stated that the corporation runs several programs that facilitate the sharing of such information with the U.S. government.[[212]](#cite_note-212) Following media reports about [PRISM](/wiki/PRISM_%28surveillance_program%29 "PRISM (surveillance program)"), NSA's massive electronic [surveillance program](/wiki/Mass_surveillance "Mass surveillance"), in May 2013, several technology companies were identified as participants, including Microsoft.[[213]](#cite_note-213) According to leaks of said program, Microsoft joined the PRISM program in 2007.[[214]](#cite_note-214) However, in June 2013, an official statement from Microsoft flatly denied their participation in the program:

> "We provide customer data only when we receive a legally binding order or subpoena to do so, and never on a voluntary basis. In addition, we only ever comply with orders for requests about specific accounts or identifiers. If the government has a broader voluntary national security program to gather customer data, we don't participate in it."[[215]](#cite_note-215)

During the first six months of 2013, Microsoft received requests that affected between 15,000 and 15,999 accounts.[[216]](#cite_note-216) In December 2013, the company made a statement to further emphasize the fact that they take their customers' privacy and [data protection](/wiki/Information_privacy "Information privacy") very seriously, even saying that "government snooping potentially now constitutes an '[advanced persistent threat](/wiki/Advanced_persistent_threat "Advanced persistent threat"),' alongside sophisticated malware and cyber attacks".[[217]](#cite_note-217) The statement also marked the beginning of three-part program to enhance Microsoft's encryption and transparency efforts. On July 1, 2014, as part of this program, they opened the first (of many) Microsoft Transparency Center, which provides "participating governments with the ability to review [source code](/wiki/Source_code "Source code") for our key products, assure themselves of their software integrity, and confirm there are no "[back doors](/wiki/Backdoor_%28computing%29 "Backdoor (computing)")."[[218]](#cite_note-218) Microsoft has also argued that the [United States Congress](/wiki/United_States_Congress "United States Congress") should enact strong privacy regulations to protect consumer data.[[219]](#cite_note-219)

In April 2016, the company [sued the U.S. government](/wiki/Microsoft_v._United_States_%282016%29 "Microsoft v. United States (2016)"), argued that secrecy orders were preventing the company from disclosing warrants to customers in violation of the company's and customers' rights. Microsoft argued that it was unconstitutional for the government to indefinitely ban Microsoft from informing its users that the government was requesting their emails and other documents and that the [Fourth Amendment](/wiki/Fourth_Amendment_to_the_United_States_Constitution "Fourth Amendment to the United States Constitution") made it so people or businesses had the right to know if the government searches or seizes their property. On October 23, 2017, Microsoft said it would drop the lawsuit as a result of a policy change by the [United States Department of Justice](/wiki/United_States_Department_of_Justice "United States Department of Justice") (DoJ). The DoJ had "changed data request rules on alerting the Internet users about agencies accessing their information."

### Security challenges

On a Friday afternoon in January 2024, Microsoft disclosed that a Russian state-sponsored group hacked into its corporate systems. The group, accessed "a very small percentage" of Microsoft corporate email accounts, which also included members of its senior leadership team and employees in its cybersecurity and legal teams.[[220]](#cite_note-220) Microsoft noted in a blog post that the attack might have been prevented if the accounts in question had enabled [multi-factor authentication](/wiki/Multi-factor_authentication "Multi-factor authentication"), a defensive measure which is widely recommended in the industry, including by Microsoft itself.[[221]](#cite_note-221)

## Corporate identity

### Corporate culture

Technical references for developers and articles for various Microsoft magazines such as *Microsoft Systems Journal* (MSJ) are available through the [Microsoft Developer Network](/wiki/Microsoft_Developer_Network "Microsoft Developer Network") (MSDN). MSDN also offers subscriptions for companies and individuals, and the more expensive subscriptions usually offer access to pre-release beta versions of Microsoft software.[[222]](#cite_note-222)[[223]](#cite_note-223) In April 2004, Microsoft launched a community site for developers and users, titled [Channel 9](/wiki/Channel_9_%28Microsoft%29 "Channel 9 (Microsoft)"), that provides a [wiki](/wiki/Wiki "Wiki") and an [Internet forum](/wiki/Internet_forum "Internet forum").[[224]](#cite_note-224) Another community site that provides daily [videocasts](/wiki/Podcast#Video_podcasts "Podcast") and other services, On10.net, launched on March 3, 2006.[[225]](#cite_note-225) Free technical support is traditionally provided through online [Usenet](/wiki/Usenet "Usenet") newsgroups, and [CompuServe](/wiki/CompuServe "CompuServe") in the past, monitored by Microsoft employees; there can be several newsgroups for a single product. Helpful people can be elected by peers or Microsoft employees for [Microsoft Most Valuable Professional](/wiki/Microsoft_Most_Valuable_Professional "Microsoft Most Valuable Professional") (MVP) status, which entitles them to a sort of special social status and possibilities for awards and other benefits.[[226]](#cite_note-226)

Noted for its internal [lexicon](/wiki/Lexicon "Lexicon"), the expression "[eating your own dog food](/wiki/Eating_your_own_dog_food "Eating your own dog food")" is used to describe the policy of using pre-release and beta versions of products inside Microsoft to test them in "real-world" situations.[[227]](#cite_note-227) This is usually shortened to just "dog food" and is used as a noun, verb, and adjective. Another bit of [jargon](/wiki/Jargon "Jargon"), [FYIFV](/wiki/FYIFV "FYIFV") or FYIV ("[Fuck](/wiki/Fuck "Fuck") You, I'm [Fully] Vested"), is used by an employee to indicate they are [financially independent](/wiki/Financial_independence "Financial independence") and can avoid work anytime they wish.[[228]](#cite_note-228)

Microsoft is an outspoken opponent of the cap on [H-1B visas](/wiki/H-1B_visa "H-1B visa"), which allows companies in the U.S. to employ certain foreign workers. Bill Gates claims the cap on H1B visas makes it difficult to hire employees for the company, stating "I'd certainly get rid of the H1B cap" in 2005.[[229]](#cite_note-229) Critics of H1B visas argue that relaxing the limits would result in increased unemployment for U.S. citizens due to H1B workers working for lower salaries.[[230]](#cite_note-230)

The [Human Rights Campaign](/wiki/Human_Rights_Campaign "Human Rights Campaign") Corporate Equality Index, a report of how progressive the organization deems company policies towards [LGBT](/wiki/LGBT "LGBT") employees, rated Microsoft as 87% from 2002 to 2004 and as 100% from 2005 to 2010 after they allowed gender expression.[[231]](#cite_note-231)

In August 2018, Microsoft implemented a policy for all companies providing subcontractors to require 12 weeks of paid parental leave to each employee. This expands on the former requirement from 2015 requiring 15 days of paid vacation and sick leave each year.[[232]](#cite_note-232) In 2015, Microsoft established its own parental leave policy to allow 12 weeks off for parental leave with an additional 8 weeks for the parent who gave birth.[[233]](#cite_note-233)

### Environment

In 2011, [Greenpeace](/wiki/Greenpeace "Greenpeace") released a report rating the top ten big brands in [cloud computing](/wiki/Cloud_computing "Cloud computing") on their sources of electricity for their [data centers](/wiki/Data_center "Data center"). At the time, data centers consumed up to 2% of all global electricity, and this amount was projected to increase. [Phil Radford](/wiki/Phil_Radford "Phil Radford") of Greenpeace said, "We are concerned that this new explosion in electricity use could lock us into old, polluting energy sources instead of the clean energy available today,"[[234]](#cite_note-234) and called on "Amazon, Microsoft and other leaders of the information-technology industry must embrace clean energy to power their cloud-based data centers."[[235]](#cite_note-235) In 2013, Microsoft agreed to buy power generated by a Texas wind project to power one of its data centers.[[236]](#cite_note-236)

Microsoft is ranked on the 17th place in [Greenpeace](/wiki/Greenpeace "Greenpeace")'s *Guide to Greener Electronics* (16th Edition) that ranks 18 electronics manufacturers according to their policies on toxic chemicals, recycling, and climate change.[[237]](#cite_note-237) Microsoft's timeline for phasing out [brominated flame retardant](/wiki/Brominated_flame_retardant "Brominated flame retardant") (BFRs) and [phthalates](/wiki/Phthalate "Phthalate") in all products was 2012 but its commitment to phasing out [PVC](/wiki/Polyvinyl_chloride "Polyvinyl chloride") is not clear. As of January 2011,[[update]](https://en.wikipedia.org/w/index.php?title=Microsoft&action=edit) it has no products that are completely free from PVC and BFRs.[[238]](#cite_note-238)[*[needs update](/wiki/Wikipedia%3AManual_of_Style/Dates_and_numbers#Chronological_items "Wikipedia:Manual of Style/Dates and numbers")*]

Microsoft's main U.S. campus received a silver certification from the [Leadership in Energy and Environmental Design](/wiki/Leadership_in_Energy_and_Environmental_Design "Leadership in Energy and Environmental Design") (LEED) program in 2008, and it installed over 2,000 [solar panels](/wiki/Solar_panel "Solar panel") on top of its buildings at its [Silicon Valley](/wiki/Silicon_Valley "Silicon Valley") campus, generating approximately 15 percent of the total energy needed by the facilities in April 2005.[[239]](#cite_note-news1-239) Microsoft makes use of alternative forms of transit. It created one of the world's largest private bus systems, the "Connector," to transport people from outside the company; for on-campus transportation, the "Shuttle Connect" uses a large fleet of hybrid cars to save fuel. The "Connector" does not compete with the public bus system and works with it to provide a cohesive transportation network not just for its employees but also for the public.[[240]](#cite_note-240)

Microsoft also subsidizes regional [public transport](/wiki/Public_transport "Public transport"), provided by [Sound Transit](/wiki/Sound_Transit "Sound Transit") and [King County Metro](/wiki/King_County_Metro "King County Metro"), as an incentive.[[239]](#cite_note-news1-239)[[241]](#cite_note-241) In February 2010, however, Microsoft took a stance against adding additional public transport and [high-occupancy vehicle](/wiki/High-occupancy_vehicle_lane "High-occupancy vehicle lane") (HOV) lanes to the [State Route 520](/wiki/Washington_State_Route_520 "Washington State Route 520") and [its floating bridge](/wiki/Evergreen_Point_Floating_Bridge "Evergreen Point Floating Bridge") connecting Redmond to Seattle; the company did not want to delay the construction any further.[[242]](#cite_note-242) Microsoft was ranked number 1 in the list of the World's Best Multinational Workplaces by the Great Place to Work Institute in 2011.[[243]](#cite_note-243)

In January 2020, the company announced a strategy to take the company [carbon negative](/wiki/Carbon_footprint "Carbon footprint") by 2030 and to [remove all carbon](/wiki/Carbon_dioxide_removal "Carbon dioxide removal") that it has emitted since its foundation in 1975.[[244]](#cite_note-244)[[245]](#cite_note-245)[[246]](#cite_note-246) On October 9, 2020, Microsoft permanently allowed [remote work](/wiki/Remote_work "Remote work").[[247]](#cite_note-247) In January 2021, the company announced on [Twitter](/wiki/Twitter "Twitter") to join the [Climate Neutral Data Centre Pact](/wiki/Climate_Neutral_Data_Centre_Pact "Climate Neutral Data Centre Pact"), which engages the cloud infrastructure and data centers industries to reach [carbon neutrality](/wiki/Carbon_neutrality "Carbon neutrality") in Europe by 2030, and also disclosed an investment in [Climeworks](/wiki/Climeworks "Climeworks"), a [direct air capture](/wiki/Direct_air_capture "Direct air capture") company partnered with [Carbfix](/wiki/Carbfix "Carbfix") for [carbon sequestration](/wiki/Carbon_sequestration "Carbon sequestration").[[list 1]](#cite_note-MicrosoftClimeworks-253) In the same year, it was awarded the EPA's Green Power Leadership Award, citing the company's use of 100 percent renewable energy since 2014.[[253]](#cite_note-254)

In September 2023, Microsoft announced that it purchased $200 million in [carbon credits to offset](/wiki/Carbon_offsets_and_credits "Carbon offsets and credits") 315,000 metric tons of carbon dioxide over 10 years from Heirloom Carbon, a carbon removal company that mixes [calcium oxide](/wiki/Calcium_oxide "Calcium oxide") from heated crushed [limestone](/wiki/Limestone "Limestone") with [water](/wiki/Water "Water") to form [carbon hydroxide](/wiki/Orthocarbonic_acid "Orthocarbonic acid") to absorb carbon dioxide from the atmosphere to [mineralize](/wiki/Mineralization_%28soil_science%29 "Mineralization (soil science)") back into limestone while the released carbon dioxide is [stored underground](/wiki/Carbon_capture_and_storage "Carbon capture and storage") or [injected into concrete](/wiki/Environmental_impact_of_concrete#Carbon_concrete "Environmental impact of concrete").[[254]](#cite_note-255)[[255]](#cite_note-256)

### Headquarters

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Aerial_Microsoft_West_Campus_August_2009.jpg/220px-Aerial_Microsoft_West_Campus_August_2009.jpg)](/wiki/File%3AAerial_Microsoft_West_Campus_August_2009.jpg)

The west campus of the [Microsoft Redmond campus](/wiki/Microsoft_Redmond_campus "Microsoft Redmond campus")

The corporate headquarters, informally known as the [Microsoft Redmond campus](/wiki/Microsoft_Redmond_campus "Microsoft Redmond campus"), is located at One Microsoft Way in Redmond, Washington. Microsoft initially moved onto the grounds of the campus on February 26, 1986, weeks before the company went public on March 13. The headquarters has since experienced multiple expansions since its establishment. It is estimated to encompass over 8 million ft2 (750,000 m2) of office space and 30,000–40,000 employees.[[256]](#cite_note-257) Additional offices are located in [Bellevue](/wiki/Bellevue%2C_Washington "Bellevue, Washington") and [Issaquah, Washington](/wiki/Issaquah%2C_Washington "Issaquah, Washington") (90,000 employees worldwide). The company is planning to upgrade its Mountain View, California, campus on a grand scale. The company has occupied this campus since 1981. In 2016, the company bought the 32-acre (13 ha) campus, with plans to renovate and expand it by 25%.[[257]](#cite_note-258) Microsoft operates an East Coast headquarters in [Charlotte, North Carolina](/wiki/Charlotte%2C_North_Carolina "Charlotte, North Carolina"),[[258]](#cite_note-259) where the construction of a data center led to the destruction of a historic black cemetery.[[259]](#cite_note-260)

### Flagship stores

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/TorontoMicrosoftStore8.JPG/220px-TorontoMicrosoftStore8.JPG)](/wiki/File%3ATorontoMicrosoftStore8.JPG)

Microsoft's [Toronto](/wiki/Toronto "Toronto") flagship store

On October 26, 2015, the company opened its retail location on Fifth Avenue in New York City. The location features a five-story glass storefront and is 22,270 square feet.[[260]](#cite_note-261) As per company executives, Microsoft had been on the lookout for a flagship location since 2009.[[261]](#cite_note-262) The company's retail locations are part of a greater strategy to help build a connection with its consumers. The opening of the store coincided with the launch of the Surface Book and Surface Pro 4.[[262]](#cite_note-263) On November 12, 2015, Microsoft opened a second flagship store, located in Sydney's Pitt Street Mall.[[263]](#cite_note-264)

### Logo

Microsoft adopted the so-called "*[Pac-Man](/wiki/Pac-Man "Pac-Man")* Logo," designed by Scott Baker, in February 26, 1987, with the concept being similar to [InFocus Corporation](/wiki/InFocus "InFocus") logo that was adapted a year earlier in 1986. Baker stated "The new logo, in [Helvetica](/wiki/Helvetica "Helvetica") italic typeface, has a slash between the *o* and *s* to emphasize the "soft" part of the name and convey motion and speed."[[264]](#cite_note-265) Dave Norris ran an internal joke campaign to save the old logo, which was green, in all uppercase, and featured a fanciful letter *O*, nicknamed the *blibbet*, but it was discarded.[[265]](#cite_note-266)

Microsoft's logo with the tagline "Your potential. Our passion."—below the main corporate name—is based on a slogan Microsoft used in 2008. In 2002, the company started using the logo in the United States and eventually started a television campaign with the slogan, changed from the previous tagline of *"[Where do you want to go today?](/wiki/Where_do_you_want_to_go_today%3F "Where do you want to go today?")"*[[266]](#cite_note-wherego1-267)[[267]](#cite_note-potentialpassion1-268)[[268]](#cite_note-269) During the private MGX (Microsoft Global Exchange) conference in 2010, Microsoft unveiled the company's next tagline, *"Be What's Next."*[[269]](#cite_note-270) They also had a slogan/tagline "Making it all make sense."[[270]](#cite_note-271) The Microsoft *Pac-Man* logo was used for 25 years, 5 months, and 28 days until August 23, 2012, being the longest logo to be used by the company.

On August 23, 2012, Microsoft unveiled a new corporate logo at the opening of its 23rd Microsoft store in Boston, indicating the company's shift of focus from the classic style to the tile-centric modern interface, which it uses/will use on the Windows Phone platform, Xbox 360, Windows 8 and the upcoming Office Suites.[[271]](#cite_note-272) The new logo also includes four squares with the colors of the then-current Windows logo which have been used to represent Microsoft's four major products: Windows (blue), Office (orange), Xbox (green) and Bing (yellow).[[272]](#cite_note-273) The logo also resembles the opening of one of the commercials for [Windows 95](/wiki/Windows_95 "Windows 95").[[273]](#cite_note-274)[[274]](#cite_note-275)

* Microsoft logo history
* [![April 4, 1975–1980: First Microsoft logo](//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_logo_%281975%29.svg/200px-Microsoft_logo_%281975%29.svg.png)](/wiki/File%3AMicrosoft_logo_%281975%29.svg "April 4, 1975–1980: First Microsoft logo")

  April 4, 1975–1980: First Microsoft logo
* [![1980–June 25, 1982: Second Microsoft logo](//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Microsoft_logo_%281980%29.svg/200px-Microsoft_logo_%281980%29.svg.png)](/wiki/File%3AMicrosoft_logo_%281980%29.svg "1980–June 25, 1982: Second Microsoft logo")

  1980–June 25, 1982: Second Microsoft logo
* [![June 25, 1982–February 26, 1987: Third Microsoft logo](//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Microsoft_logo_%281982%29.svg/200px-Microsoft_logo_%281982%29.svg.png)](/wiki/File%3AMicrosoft_logo_%281982%29.svg "June 25, 1982–February 26, 1987: Third Microsoft logo")

  June 25, 1982–February 26, 1987: Third Microsoft logo
* [![February 26, 1987–August 23, 2012: Microsoft "Pac-Man" logo, designed by Scott Baker[266][267]](//upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Microsoft_logo_%281987%29.svg/200px-Microsoft_logo_%281987%29.svg.png)](/wiki/File%3AMicrosoft_logo_%281987%29.svg "February 26, 1987–August 23, 2012: Microsoft \"Pac-Man\" logo, designed by Scott Baker[266][267]")

  February 26, 1987–August 23, 2012: Microsoft "[Pac-Man](/wiki/Pac-Man "Pac-Man")" logo, designed by Scott Baker[[266]](#cite_note-wherego1-267)[[267]](#cite_note-potentialpassion1-268)
* [![August 23, 2012–present: Fifth and current Microsoft logo[275]](//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png)](/wiki/File%3AMicrosoft_logo_%282012%29.svg "August 23, 2012–present: Fifth and current Microsoft logo[275]")

  August 23, 2012–present: Fifth and current Microsoft logo[[275]](#cite_note-276)

### Sponsorship

[![Toyota Yaris WRC.jpg](//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Toyota_Yaris_WRC.jpg/220px-Toyota_Yaris_WRC.jpg)](/wiki/File%3AToyota_Yaris_WRC.jpg)

Toyota Yaris WRC

The company was the official jersey sponsor of [Finland's national basketball team](/wiki/Finland_national_basketball_team "Finland national basketball team") at [EuroBasket 2015](/wiki/EuroBasket_2015 "EuroBasket 2015").[[276]](#cite_note-277)

The company was a major sponsor of the [Toyota Gazoo Racing WRT](/wiki/Toyota_Gazoo_Racing_WRT "Toyota Gazoo Racing WRT") ([2017](/wiki/2017_WRC "2017 WRC")–[2020](/wiki/2020_World_Rally_Championship "2020 World Rally Championship")).

The company was a sponsor of the [Renault F1 Team](/wiki/Renault_F1_Team "Renault F1 Team") ([2016](/wiki/2016_Formula_One_World_Championship "2016 Formula One World Championship")–[2020](/wiki/2020_Formula_One_World_Championship "2020 Formula One World Championship")).

### Philanthropy

In 2015, Microsoft Philanthropies, an internal charitable organization, was established. Its mission is to bring the benefits of technology to parts of the world and segments of the population that have been denied the benefits of the digital revolution. Key areas of focus: donating cloud computing resources to university researchers and nonprofit groups; supporting the expansion of broadband access worldwide; funding international computer science education through YouthSpark; supporting tech education in the U.S. from kindergarten to high school; and donating to global child and refugee relief organizations.[[277]](#cite_note-278)[[278]](#cite_note-279)

During the [COVID-19 pandemic](/wiki/COVID-19_pandemic "COVID-19 pandemic"), Microsoft's president, [Brad Smith](/wiki/Brad_Smith_%28American_lawyer%29 "Brad Smith (American lawyer)"), announced that an initial batch of supplies, including 15,000 protection goggles, [infrared thermometers](/wiki/Infrared_thermometer "Infrared thermometer"), medical caps, and protective suits, was donated to Seattle, with further aid to come soon.[[279]](#cite_note-280)

During [2022 Russian invasion of Ukraine](/wiki/2022_Russian_invasion_of_Ukraine "2022 Russian invasion of Ukraine") Microsoft started monitoring cyberattacks originating from the Russian government and Russia-backed hackers. In June 2022, Microsoft published the report on Russian cyber attacks and concluded that state-backed Russian hackers "have engaged in "strategic espionage" against governments, think tanks, businesses and aid groups" in 42 countries supporting Kyiv.[[280]](#cite_note-281)[[281]](#cite_note-282)

### Controversies

Main articles: [Microsoft litigation](/wiki/Microsoft_litigation "Microsoft litigation") and [Criticism of Microsoft](/wiki/Criticism_of_Microsoft "Criticism of Microsoft")

Criticism of Microsoft has followed various aspects of its products and business practices. Frequently criticized are the [ease of use](/wiki/Ease_of_use "Ease of use"), [robustness](/wiki/Robustness_%28computer_science%29 "Robustness (computer science)"), and [security](/wiki/Computer_security "Computer security") of the company's software. They have also been criticized for the use of [permatemp](/wiki/Permatemp "Permatemp") employees (employees employed for years as "temporary," and therefore without medical benefits), the use of [forced retention](/wiki/Forced_retention "Forced retention") tactics, which means that employees would be sued if they tried to leave.[[282]](#cite_note-283) Historically, Microsoft has also been accused of overworking employees, in many cases, leading to [burnout](/wiki/Occupational_burnout "Occupational burnout") within just a few years of joining the company. The company is often referred to as a "Velvet Sweatshop", a term which originated in a 1989 *[Seattle Times](/wiki/Seattle_Times "Seattle Times")* article,[[283]](#cite_note-284) and later became used to describe the company by some of Microsoft's own employees.[[284]](#cite_note-285) This characterization is derived from the perception that Microsoft provides nearly everything for its employees in a convenient place, but in turn overworks them to a point where it would be bad for their (possibly long-term) health.

As reported by several news outlets,[[285]](#cite_note-286)[[286]](#cite_note-Neate-287) an Irish subsidiary of Microsoft based in the [Republic of Ireland](/wiki/Republic_of_Ireland "Republic of Ireland") declared £220 bn in profits but paid no corporation tax for the year 2020. This is due to the company being tax resident in [Bermuda](/wiki/Bermuda "Bermuda") as mentioned in the accounts for 'Microsoft Round Island One, a subsidiary that collects license fees from the use of Microsoft software worldwide. Dame [Margaret Hodge](/wiki/Margaret_Hodge "Margaret Hodge"), a [Labour](/wiki/Labour_Party_%28UK%29 "Labour Party (UK)") [MP](/wiki/Member_of_Parliament_%28United_Kingdom%29 "Member of Parliament (United Kingdom)") in the UK said, "It is unsurprising – yet still shocking – that massively wealthy global corporations openly, unashamedly and blatantly refuse to pay tax on the profits they make in the countries where they undertake business".[[286]](#cite_note-Neate-287)

In 2020, [ProPublica](/wiki/ProPublica "ProPublica") reported that the company had diverted more than $39 billion in U.S. profits to Puerto Rico using a mechanism structured to make it seem as if the company was unprofitable on paper. As a result, the company paid a tax rate on those profits of "nearly 0%." When the [Internal Revenue Service](/wiki/Internal_Revenue_Service "Internal Revenue Service") audited these transactions, ProPublica reported that Microsoft aggressively fought back, including successfully lobbying Congress to change the law to make it harder for the agency to conduct audits of large corporations.[[287]](#cite_note-288)[[288]](#cite_note-289)

"Embrace, extend, and extinguish" (EEE),[[289]](#cite_note-DeadlyEmbrace-290) also known as "embrace, extend, and exterminate,"[[290]](#cite_note-291) is a phrase that the [U.S. Department of Justice](/wiki/United_States_Department_of_Justice "United States Department of Justice") found[[291]](#cite_note-292) that was used internally by Microsoft[[292]](#cite_note-293) to describe its strategy for entering product categories involving widely used standards, extending those standards with [proprietary](/wiki/Proprietary_software "Proprietary software") capabilities, and then using those differences to strongly disadvantage competitors. Microsoft is frequently accused of using anticompetitive tactics and abusing its monopolistic power. People who use their products and services often end up becoming dependent on them, a process is known as [vendor lock-in](/wiki/Vendor_lock-in "Vendor lock-in").

Microsoft was the first company to participate in [the PRISM surveillance program](/wiki/PRISM_%28surveillance_program%29 "PRISM (surveillance program)"), according to leaked NSA documents obtained by *The Guardian*[[293]](#cite_note-294) and *The Washington Post*[[294]](#cite_note-295) in June 2013, and acknowledged by government officials following the leak.[[295]](#cite_note-296) The program authorizes the government to secretly access data of non-US citizens hosted by American companies without a warrant. Microsoft has denied participation in such a program.[[296]](#cite_note-297)

[Jesse Jackson](/wiki/Jesse_Jackson "Jesse Jackson") believes Microsoft should hire more [minorities](/wiki/Minorities "Minorities") and women. In 2015, he praised Microsoft for appointing two women to its board of directors.[[297]](#cite_note-298)

In 2020, [Salesforce](/wiki/Salesforce "Salesforce"), the manufacturer of the [Slack](/wiki/Slack_%28software%29 "Slack (software)") platform, complained to European regulators about Microsoft due to the integration of the Teams service into Office 365. Negotiations with the European Commission continued until the summer of 2023, but, as it became known to the media, they reached an impasse. Microsoft is now facing an antitrust investigation.[[298]](#cite_note-299)

## See also

* [List of Microsoft software](/wiki/List_of_Microsoft_software "List of Microsoft software")
* [Microsoft hardware](/wiki/Microsoft_hardware "Microsoft hardware")
* [List of mergers and acquisitions by Microsoft](/wiki/List_of_mergers_and_acquisitions_by_Microsoft "List of mergers and acquisitions by Microsoft")
* [Microsoft engineering groups](/wiki/Microsoft_engineering_groups "Microsoft engineering groups")
* [Microsoft Enterprise Agreement](/wiki/Microsoft_Enterprise_Agreement "Microsoft Enterprise Agreement")

## References

1. **[^](#cite_ref-1)** ["Microsoft Corporation Form 10-K"](https://www.sec.gov/ix?doc=/Archives/edgar/data/789019/000095017023035122/msft-20230630.htm). [U.S. Securities and Exchange Commission](/wiki/U.S._Securities_and_Exchange_Commission "U.S. Securities and Exchange Commission"). July 27, 2023. pp. 9, 58, 60.
2. **[^](#cite_ref-2)** ["Microsoft Investor Relations - FAQs"](https://www.microsoft.com/en-us/investor/faq.aspx). *Microsoft*.
3. **[^](#cite_ref-3)** ["Fortune 500 Companies 2019: Who Made the List"](https://fortune.com/fortune500/2022/search/). [Fortune](/wiki/Fortune_%28magazine%29 "Fortune (magazine)"). Retrieved July 1, 2022.
4. **[^](#cite_ref-4)** Warren, Tom (October 13, 2023). ["Microsoft completes Activision Blizzard acquisition, Call of Duty now part of Xbox"](https://www.theverge.com/2023/10/13/23791235/microsoft-activision-blizzard-acquisition-complete-finalized). *The Verge*. Retrieved November 1, 2023.
5. **[^](#cite_ref-5)** ["U.S. Securities and Exchange Commission – Linkedin"](https://www.sec.gov/Archives/edgar/data/1271024/000110465916161289/a16-22816_18k.htm). *US SEC*. December 8, 2016. [Archived](https://web.archive.org/web/20171018154931/https%3A//www.sec.gov/Archives/edgar/data/1271024/000110465916161289/a16-22816_18k.htm) from the original on October 18, 2017. Retrieved April 29, 2018. As a result of the Merger, a change in control of [Linkedin] occurred and [Linkedin] became a wholly-owned subsidiary of [Microsoft]. The transaction resulted in the payment of approximately $26.4 billion in cash merger consideration.
6. **[^](#cite_ref-6)** ["Microsoft confirms takeover of Skype"](https://www.bbc.com/news/business-13343600). BBC. May 10, 2011. [Archived](https://web.archive.org/web/20180620073353/https%3A//www.bbc.com/news/business-13343600) from the original on June 20, 2018. Retrieved April 29, 2018.
7. **[^](#cite_ref-7)** Keizer, Gregg (July 14, 2014). ["Microsoft gets real, admits its device share is just 14%"](http://www.computerworld.com/article/2490008/microsoft-windows/microsoft-gets-real--admits-its-device-share-is-just-14-.html). *[Computerworld](/wiki/Computerworld "Computerworld")*. [International Data Group](/wiki/International_Data_Group "International Data Group"). [Archived](https://web.archive.org/web/20160821210826/http%3A//www.computerworld.com/article/2490008/microsoft-windows/microsoft-gets-real--admits-its-device-share-is-just-14-.html) from the original on August 21, 2016. [Microsoft's chief operating officer] Turner's 14% came from a new forecast released last week by Gartner, which estimated Windows' share of the shipped device market last year was 14% and would decrease slightly to 13.7% in 2014. [..] Android will dominate, Gartner said, with a 48% share this year
8. **[^](#cite_ref-8)** Blodget, Henry (August 23, 2013). ["And Microsoft Is Giving Up On The Software Business!"](https://www.businessinsider.com.au/microsoft-device-and-services-2013-8). *Business Insider Australia*. [Archived](https://web.archive.org/web/20170802165822/https%3A//www.businessinsider.com.au/microsoft-device-and-services-2013-8) from the original on August 2, 2017. Retrieved August 2, 2017.
9. **[^](#cite_ref-9)** ["Notify The Next Of Kin"](http://www.informationweek.com/applications/notify-the-next-of-kin/d/d-id/1090416). *[InformationWeek](/wiki/InformationWeek "InformationWeek")*. June 30, 2010. [Archived](https://web.archive.org/web/20140424124515/http%3A//www.informationweek.com/applications/notify-the-next-of-kin/d/d-id/1090416) from the original on April 24, 2014. Retrieved April 24, 2014.

Bundled references

1. **[^](#cite_ref-MicrosoftClimeworks_253-0)** [[248]](#cite_note-248)[[249]](#cite_note-249)[[250]](#cite_note-250)[[251]](#cite_note-251)[[252]](#cite_note-252)

## External links

* [Official website](https://www.microsoft.com/) [![Edit this at Wikidata](//upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png)](https://www.wikidata.org/wiki/Q2283#P856 "Edit this at Wikidata")
* Business data for Microsoft Corporation:

  + [Bloomberg](https://www.bloomberg.com/quote/MSFT%3AUS)
  + [Google](https://www.google.com/finance/quote/MSFT%3ANASDAQ)
  + [Reuters](https://www.reuters.com/markets/companies/MSFT.O)
  + [SEC filings](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=789019)
  + [Yahoo!](https://finance.yahoo.com/quote/MSFT)
* [Microsoft companies](https://opencorporates.com/corporate_groupings/Microsoft) grouped at [OpenCorporates](/wiki/OpenCorporates "OpenCorporates")

| * [v](/wiki/Template%3AMicrosoft "Template:Microsoft") * [t](/wiki/Template_talk%3AMicrosoft "Template talk:Microsoft") * [e](/wiki/Special%3AEditPage/Template%3AMicrosoft "Special:EditPage/Template:Microsoft")  Microsoft | |
| --- | --- |
| * [History](/wiki/History_of_Microsoft "History of Microsoft") * [Outline](/wiki/Outline_of_Microsoft "Outline of Microsoft") | |
| People | |  |  | | --- | --- | | Founders | * [Bill Gates](/wiki/Bill_Gates "Bill Gates") * [Paul Allen](/wiki/Paul_Allen "Paul Allen") | | Board of directors | * [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella") (Chairman and CEO) * [John W. Thompson](/wiki/John_W._Thompson "John W. Thompson") * [John W. Stanton](/wiki/John_W._Stanton "John W. Stanton") * [Reid Hoffman](/wiki/Reid_Hoffman "Reid Hoffman") * [Sandi Peterson](/wiki/Sandi_Peterson "Sandi Peterson") * [Penny Pritzker](/wiki/Penny_Pritzker "Penny Pritzker") * [Carlos A. Rodriguez](/wiki/Carlos_A._Rodriguez "Carlos A. Rodriguez") * [Charles Scharf](/wiki/Charles_Scharf "Charles Scharf") * [Emma Walmsley](/wiki/Emma_Walmsley "Emma Walmsley") * [Padmasree Warrior](/wiki/Padmasree_Warrior "Padmasree Warrior") | | Senior leadership team | * [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella") (CEO) * [Chris Capossela](/wiki/Chris_Capossela "Chris Capossela") (CMO) * [Scott Guthrie](/wiki/Scott_Guthrie "Scott Guthrie") * [Amy Hood](/wiki/Amy_Hood "Amy Hood") (CFO) * [Kevin Scott](/wiki/Kevin_Scott_%28computer_scientist%29 "Kevin Scott (computer scientist)") (CTO) * [Brad Smith](/wiki/Brad_Smith_%28American_lawyer%29 "Brad Smith (American lawyer)") (CLO) * [Harry Shum](/wiki/Harry_Shum "Harry Shum") * [Phil Spencer](/wiki/Phil_Spencer_%28business_executive%29 "Phil Spencer (business executive)") * [Kathleen Hogan](/wiki/Kathleen_Hogan "Kathleen Hogan") (CPO) | | Corporate VPs | * [Joe Belfiore](/wiki/Joe_Belfiore "Joe Belfiore") * [Richard Rashid](/wiki/Richard_Rashid "Richard Rashid") (SVP) * [César Cernuda](/wiki/C%C3%A9sar_Cernuda "César Cernuda") * [Panos Panay](/wiki/Panos_Panay_%28Microsoft%29 "Panos Panay (Microsoft)") (CVP) | | Employee groups | * [Global LGBTQIA+ Employee & Allies at Microsoft](/wiki/Global_LGBTQIA%2B_Employee_%26_Allies_at_Microsoft "Global LGBTQIA+ Employee & Allies at Microsoft") * [Microsoft and unions](/wiki/Microsoft_and_unions "Microsoft and unions") | |
| Products | |  |  | | --- | --- | | [Hardware](/wiki/Microsoft_hardware "Microsoft hardware") | * [Azure Kinect](/wiki/Azure_Kinect "Azure Kinect") * [HoloLens](/wiki/Microsoft_HoloLens "Microsoft HoloLens") * [LifeCam](/wiki/LifeCam "LifeCam") * [Surface](/wiki/Microsoft_Surface "Microsoft Surface")   + [Hub](/wiki/Surface_Hub "Surface Hub")   + [Go](/wiki/Surface_Go "Surface Go")   + [Laptop](/wiki/Surface_Laptop "Surface Laptop")   + [Laptop Go](/wiki/Surface_Laptop_Go "Surface Laptop Go")   + [Pro](/wiki/Surface_Pro "Surface Pro")   + [Studio](/wiki/Surface_Studio "Surface Studio")   + [Duo](/wiki/Surface_Duo "Surface Duo")   + [Neo](/wiki/Surface_Neo "Surface Neo") * [Xbox](/wiki/Xbox "Xbox") | | [Software](/wiki/List_of_Microsoft_software "List of Microsoft software") | * [365](/wiki/Microsoft_365 "Microsoft 365") * [Clipchamp](/wiki/Clipchamp "Clipchamp") * [Dynamics](/wiki/Microsoft_Dynamics "Microsoft Dynamics") * [Havok](/wiki/Havok_%28software%29 "Havok (software)") * [Open source software](/wiki/Microsoft_and_open_source "Microsoft and open source") * [Office](/wiki/Microsoft_Office "Microsoft Office") * [Power Platform](/wiki/Microsoft_Power_Platform "Microsoft Power Platform") * [Servers](/wiki/Microsoft_Servers "Microsoft Servers") * [Start](/wiki/Microsoft_Start "Microsoft Start") * [Tay](/wiki/Tay_%28chatbot%29 "Tay (chatbot)") * [Visual Studio](/wiki/Microsoft_Visual_Studio "Microsoft Visual Studio") * [Visual Studio Code](/wiki/Visual_Studio_Code "Visual Studio Code") * [Windows](/wiki/Microsoft_Windows "Microsoft Windows") * [Xbox OS](/wiki/Xbox_system_software "Xbox system software") | | Programming  languages | * [BASIC](/wiki/BASIC "BASIC")   + [VB.NET](/wiki/Visual_Basic_.NET "Visual Basic .NET")   + [VBA](/wiki/Visual_Basic_for_Applications "Visual Basic for Applications")   + [VBScript](/wiki/VBScript "VBScript")   + [Visual Basic](/wiki/Visual_Basic_%28classic%29 "Visual Basic (classic)") * [C#](/wiki/C_Sharp_%28programming_language%29 "C Sharp (programming language)") * [C/AL a.k.a Navision Attain](/wiki/C/AL "C/AL") * [F#](/wiki/F_Sharp_%28programming_language%29 "F Sharp (programming language)") * [MVPL](/wiki/Microsoft_Visual_Programming_Language "Microsoft Visual Programming Language") * [Power Fx](/wiki/Microsoft_Power_Fx "Microsoft Power Fx") * [PowerShell](/wiki/PowerShell "PowerShell") * [Transact-SQL](/wiki/Transact-SQL "Transact-SQL") * [TypeScript](/wiki/TypeScript "TypeScript") * [Q#](/wiki/Q_Sharp "Q Sharp") * *[Visual J#](/wiki/Visual_J_Sharp "Visual J Sharp")* * *[Visual J++](/wiki/Visual_J%2B%2B "Visual J++")* | | Web properties | * [Azure](/wiki/Microsoft_Azure "Microsoft Azure") * [Bing](/wiki/Microsoft_Bing "Microsoft Bing") * [Microsoft Learn](/wiki/Microsoft_Learn "Microsoft Learn")   + [Channel 9](/wiki/Channel_9_%28Microsoft%29 "Channel 9 (Microsoft)")   + [Developer Network](/wiki/Microsoft_Developer_Network "Microsoft Developer Network")   + [TechNet](/wiki/Microsoft_TechNet "Microsoft TechNet") * [GitHub](/wiki/GitHub "GitHub") * [LinkedIn](/wiki/LinkedIn "LinkedIn")   + [LinkedIn Learning](/wiki/LinkedIn_Learning "LinkedIn Learning") * [MSN](/wiki/MSN "MSN") * [Outlook.com](/wiki/Outlook.com "Outlook.com") * [Store](/wiki/Microsoft_Store "Microsoft Store") * [Translator](/wiki/Microsoft_Translator "Microsoft Translator") | |
| Company | |  |  | | --- | --- | | Conferences | * [Build](/wiki/Microsoft_Build "Microsoft Build") * [Ignite](/wiki/Microsoft_Ignite "Microsoft Ignite") * [Inspire](/wiki/Microsoft_Inspire "Microsoft Inspire") * [MIX](/wiki/MIX_%28Microsoft%29 "MIX (Microsoft)") * [PDC](/wiki/Professional_Developers_Conference "Professional Developers Conference") * [WinHEC](/wiki/Windows_Hardware_Engineering_Conference "Windows Hardware Engineering Conference") | | Divisions | * [Engineering groups](/wiki/Microsoft_engineering_groups "Microsoft engineering groups")   + [Mobile](/wiki/Microsoft_Mobile "Microsoft Mobile")   + [Skype unit](/wiki/Skype_Technologies "Skype Technologies") * [Digital Crimes Unit](/wiki/Microsoft_Digital_Crimes_Unit "Microsoft Digital Crimes Unit") * [Garage](/wiki/Microsoft_Garage "Microsoft Garage") * [Press](/wiki/Microsoft_Press "Microsoft Press") * [Research](/wiki/Microsoft_Research "Microsoft Research") * [Retail stores](/wiki/Microsoft_Store_%28retail%29 "Microsoft Store (retail)") * [.NET Foundation](/wiki/.NET_Foundation ".NET Foundation") * [Outercurve Foundation](/wiki/Outercurve_Foundation "Outercurve Foundation") * [Gaming](/wiki/Microsoft_Gaming "Microsoft Gaming")   + [Xbox Game Studios](/wiki/Xbox_Game_Studios "Xbox Game Studios")   + [ZeniMax Media](/wiki/ZeniMax_Media "ZeniMax Media")   + [Activision Blizzard](/wiki/Activision_Blizzard "Activision Blizzard") | | Estates | * [Microsoft campus](/wiki/Microsoft_campus "Microsoft campus") * [Microsoft Egypt](/wiki/Microsoft_Egypt "Microsoft Egypt") * [Microsoft India](/wiki/Microsoft_India "Microsoft India") * [Microsoft Japan](/wiki/Microsoft_Japan "Microsoft Japan") | |
| Campaigns | * *[Where do you want to go today?](/wiki/Where_do_you_want_to_go_today%3F "Where do you want to go today?")* (1994) * *[Champagne](/wiki/Champagne_%28advertisement%29 "Champagne (advertisement)")* (2002) * *[Mojave Experiment](/wiki/Mojave_Experiment "Mojave Experiment")* (2006) * *[I'm a PC](/wiki/I%27m_a_PC "I'm a PC")* (2008) * *[Scroogled](/wiki/Scroogled "Scroogled")* (2012) |
| [Criticism](/wiki/Criticism_of_Microsoft "Criticism of Microsoft") | * [Bundling of Microsoft Windows](/wiki/Bundling_of_Microsoft_Windows "Bundling of Microsoft Windows") * [Clippy](/wiki/Office_Assistant "Office Assistant") * [iLoo](/wiki/ILoo#Reaction "ILoo") * [Internet Explorer](/wiki/Internet_Explorer#Security_vulnerabilities "Internet Explorer") * [Microsoft Bob](/wiki/Microsoft_Bob "Microsoft Bob") * [\_NSAKEY](/wiki/NSAKEY "NSAKEY") * [Windows](/wiki/Criticism_of_Microsoft_Windows "Criticism of Microsoft Windows")   + [XP](/wiki/Criticism_of_Windows_XP "Criticism of Windows XP")   + [Vista](/wiki/Criticism_of_Windows_Vista "Criticism of Windows Vista")   + [10](/wiki/Criticism_of_Windows_10 "Criticism of Windows 10") |
| [Litigation](/wiki/Microsoft_litigation "Microsoft litigation") | * *[Alcatel-Lucent v. Microsoft](/wiki/Alcatel-Lucent_v._Microsoft_Corp. "Alcatel-Lucent v. Microsoft Corp.")* * *[Apple v. Microsoft](/wiki/Apple_Computer%2C_Inc._v._Microsoft_Corp. "Apple Computer, Inc. v. Microsoft Corp.")* * *[Microsoft v. Commission](/wiki/Microsoft_Corp._v._Commission "Microsoft Corp. v. Commission")* * *[FTC v. Microsoft](/wiki/FTC_v._Microsoft "FTC v. Microsoft")* * *[Microsoft v. Lindows](/wiki/Microsoft_Corp._v._Lindows.com%2C_Inc. "Microsoft Corp. v. Lindows.com, Inc.")* * *[Microsoft v. MikeRoweSoft](/wiki/Microsoft_v._MikeRoweSoft "Microsoft v. MikeRoweSoft")* * *[Microsoft v. Shah](/wiki/Microsoft_Corp._v._Shah "Microsoft Corp. v. Shah")* * *[United States v. Microsoft](/wiki/United_States_v._Microsoft_Corp. "United States v. Microsoft Corp.")* (2001 antitrust case) * *[Microsoft v. United States](/wiki/Microsoft_Corp._v._United_States "Microsoft Corp. v. United States")* (2018 data privacy case) |
| [Acquisitions](/wiki/List_of_mergers_and_acquisitions_by_Microsoft "List of mergers and acquisitions by Microsoft") | |  |  | | --- | --- | | Completed | * [6Wunderkinder](/wiki/Wunderlist "Wunderlist") * [Access Software](/wiki/Access_Software "Access Software") * [Acompli](/wiki/Acompli "Acompli") * [Activision Blizzard](/wiki/Activision_Blizzard "Activision Blizzard")   + [acquisition](/wiki/Acquisition_of_Activision_Blizzard_by_Microsoft "Acquisition of Activision Blizzard by Microsoft") * [Altamira Software](/wiki/Altamira_Software "Altamira Software") * [AltspaceVR](/wiki/AltspaceVR "AltspaceVR") * [aQuantive](/wiki/AQuantive "AQuantive") * [Azyxxi](/wiki/Microsoft_Amalga "Microsoft Amalga") * [The Blue Ribbon SoundWorks](/wiki/The_Blue_Ribbon_SoundWorks "The Blue Ribbon SoundWorks") * [Beam](/wiki/Mixer_%28website%29 "Mixer (website)") * [Bungie](/wiki/Bungie "Bungie") * [Calista Technologies](/wiki/Calista_Technologies "Calista Technologies") * [Clipchamp](/wiki/Clipchamp "Clipchamp") * [Colloquis](/wiki/Colloquis "Colloquis") * [Compulsion Games](/wiki/Compulsion_Games "Compulsion Games") * [Connectix](/wiki/Connectix "Connectix") * [Consumers Software](/wiki/Consumers_Software "Consumers Software") * [Danger](/wiki/Danger_Inc. "Danger Inc.") * [Double Fine Productions](/wiki/Double_Fine_Productions "Double Fine Productions") * [Farecast](/wiki/MSN_Travel "MSN Travel") * [FASA Studio](/wiki/FASA_Studio "FASA Studio") * [Fast Search & Transfer](/wiki/Microsoft_Development_Center_Norway "Microsoft Development Center Norway") * [Firefly](/wiki/Firefly_%28website%29 "Firefly (website)") * [Forethought](/wiki/Forethought%2C_Inc. "Forethought, Inc.") * [GIANT Company Software](/wiki/Windows_Defender "Windows Defender") * [GitHub](/wiki/GitHub "GitHub") * [GreenButton](/wiki/GreenButton "GreenButton") * [Groove Networks](/wiki/Groove_Networks "Groove Networks") * [Havok Group](/wiki/Havok_%28company%29 "Havok (company)") * *[High Heat Major League Baseball](/wiki/High_Heat_Major_League_Baseball "High Heat Major League Baseball")* * [Hotmail](/wiki/Outlook.com "Outlook.com") * [inXile Entertainment](/wiki/InXile_Entertainment "InXile Entertainment") * [Jellyfish.com](/wiki/Jellyfish.com "Jellyfish.com") * [LinkedIn](/wiki/LinkedIn "LinkedIn") * [LinkExchange](/wiki/LinkExchange "LinkExchange") * [Lionhead Studios](/wiki/Lionhead_Studios "Lionhead Studios") * [Maluuba](/wiki/Maluuba "Maluuba") * [Massive Incorporated](/wiki/Massive_Incorporated "Massive Incorporated") * [Metaswitch](/wiki/Metaswitch "Metaswitch") * [Mobile Data Labs](/wiki/MileIQ "MileIQ") * [Mojang Studios](/wiki/Mojang_Studios "Mojang Studios") * [Ninja Theory](/wiki/Ninja_Theory "Ninja Theory") * [Nokia Devices and Services](/wiki/Microsoft_Mobile "Microsoft Mobile") * [npm](/wiki/Npm%2C_Inc. "Npm, Inc.") * [Nuance Communications](/wiki/Nuance_Communications "Nuance Communications") * [Obsidian Entertainment](/wiki/Obsidian_Entertainment "Obsidian Entertainment") * [Onfolio](/wiki/Windows_Live_Toolbar#Onfolio "Windows Live Toolbar") * [Pando Networks](/wiki/Pando_Networks "Pando Networks") * [Perceptive Pixel](/wiki/Perceptive_Pixel "Perceptive Pixel") * [Playground Games](/wiki/Playground_Games "Playground Games") * [PlaceWare](/wiki/PlaceWare "PlaceWare") * [Powerset](/wiki/Powerset_%28company%29 "Powerset (company)") * [Press Play](/wiki/Press_Play_%28company%29 "Press Play (company)") * [ProClarity](/wiki/ProClarity "ProClarity") * [Rare](/wiki/Rare_%28company%29 "Rare (company)") * [Revolution Analytics](/wiki/Revolution_Analytics "Revolution Analytics") * [RiskIQ](/wiki/RiskIQ "RiskIQ") * [ScreenTonic](/wiki/ScreenTonic "ScreenTonic") * [Secure Islands](/wiki/Secure_Islands "Secure Islands") * [Simplygon](/wiki/Simplygon "Simplygon") * [Skype](/wiki/Skype_Technologies "Skype Technologies") * [Sunrise Atelier](/wiki/Sunrise_Calendar "Sunrise Calendar") * [SwiftKey](/wiki/Microsoft_SwiftKey "Microsoft SwiftKey") * [Winternals Software](/wiki/Sysinternals "Sysinternals") * [Teleo](/wiki/Teleo "Teleo") * [Tellme Networks](/wiki/Tellme_Networks "Tellme Networks") * [Twisted Pixel Games](/wiki/Twisted_Pixel_Games "Twisted Pixel Games") * [Undead Labs](/wiki/Undead_Labs "Undead Labs") * [Vermeer Technologies](/wiki/Vermeer_Technologies "Vermeer Technologies") * [Visio Corporation](/wiki/Visio_Corporation "Visio Corporation") * [Vivaty](/wiki/Flux_%28graphics_software%29 "Flux (graphics software)") * [VoloMetrix](/wiki/VoloMetrix "VoloMetrix") * [VXtreme](/wiki/NetShow "NetShow") * [WebTV Networks](/wiki/MSN_TV "MSN TV") * [Xamarin](/wiki/Xamarin "Xamarin") * [Xandr](/wiki/Xandr "Xandr")   + [AppNexus](/wiki/AppNexus "AppNexus") * [Yammer](/wiki/Yammer "Yammer") * [Yupi](/wiki/Yupi "Yupi") * [ZeniMax Media](/wiki/ZeniMax_Media "ZeniMax Media") | |
| * ![](//upload.wikimedia.org/wikipedia/en/thumb/9/96/Symbol_category_class.svg/16px-Symbol_category_class.svg.png) [Category](/wiki/Category%3AMicrosoft "Category:Microsoft") | |

| Links to related articles | |
| --- | --- |
| | * [v](/wiki/Template%3ADow_Jones_Industrial_Average_companies "Template:Dow Jones Industrial Average companies") * [t](/wiki/Template_talk%3ADow_Jones_Industrial_Average_companies "Template talk:Dow Jones Industrial Average companies") * [e](/wiki/Special%3AEditPage/Template%3ADow_Jones_Industrial_Average_companies "Special:EditPage/Template:Dow Jones Industrial Average companies")  Components of the [Dow Jones Industrial Average](/wiki/Dow_Jones_Industrial_Average "Dow Jones Industrial Average") | | | --- | --- | | * [3M](/wiki/3M "3M") * [Amazon](/wiki/Amazon_%28company%29 "Amazon (company)") * [American Express](/wiki/American_Express "American Express") * [Amgen](/wiki/Amgen "Amgen") * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Boeing](/wiki/Boeing "Boeing") * [Caterpillar](/wiki/Caterpillar_Inc. "Caterpillar Inc.") * [Chevron](/wiki/Chevron_Corporation "Chevron Corporation") * [Cisco](/wiki/Cisco "Cisco") * [Coca-Cola](/wiki/The_Coca-Cola_Company "The Coca-Cola Company") * [Disney](/wiki/The_Walt_Disney_Company "The Walt Disney Company") * [Dow](/wiki/Dow_Chemical_Company "Dow Chemical Company") * [Goldman Sachs](/wiki/Goldman_Sachs "Goldman Sachs") * [Home Depot](/wiki/The_Home_Depot "The Home Depot") * [Honeywell](/wiki/Honeywell "Honeywell") * [IBM](/wiki/IBM "IBM") * [Intel](/wiki/Intel "Intel") * [Johnson & Johnson](/wiki/Johnson_%26_Johnson "Johnson & Johnson") * [JPMorgan Chase](/wiki/JPMorgan_Chase "JPMorgan Chase") * [McDonald's](/wiki/McDonald%27s "McDonald's") * [Merck](/wiki/Merck_%26_Co. "Merck & Co.") * Microsoft * [Nike](/wiki/Nike%2C_Inc. "Nike, Inc.") * [Procter & Gamble](/wiki/Procter_%26_Gamble "Procter & Gamble") * [Salesforce](/wiki/Salesforce "Salesforce") * [Travelers](/wiki/The_Travelers_Companies "The Travelers Companies") * [UnitedHealth](/wiki/UnitedHealth_Group "UnitedHealth Group") * [Verizon](/wiki/Verizon "Verizon") * [Visa](/wiki/Visa_Inc. "Visa Inc.") * [Walmart](/wiki/Walmart "Walmart") | |    | * [v](/wiki/Template%3ANasdaq-100 "Template:Nasdaq-100") * [t](/wiki/Template_talk%3ANasdaq-100 "Template talk:Nasdaq-100") * [e](/wiki/Special%3AEditPage/Template%3ANasdaq-100 "Special:EditPage/Template:Nasdaq-100")  Companies of the [Nasdaq-100](/wiki/Nasdaq-100 "Nasdaq-100") index | | | --- | --- | | * [Adobe](/wiki/Adobe_Inc. "Adobe Inc.") * [ADP](/wiki/ADP%2C_Inc. "ADP, Inc.") * [AMD](/wiki/AMD "AMD") * [Airbnb](/wiki/Airbnb "Airbnb") * [Alphabet](/wiki/Alphabet_Inc. "Alphabet Inc.") * [Amazon](/wiki/Amazon_%28company%29 "Amazon (company)") * [AEP](/wiki/American_Electric_Power "American Electric Power") * [Amgen](/wiki/Amgen "Amgen") * [Analog Devices](/wiki/Analog_Devices "Analog Devices") * [Ansys](/wiki/Ansys "Ansys") * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Applied Materials](/wiki/Applied_Materials "Applied Materials") * [ASML](/wiki/ASML_Holding "ASML Holding") * [AstraZeneca](/wiki/AstraZeneca "AstraZeneca") * [Atlassian](/wiki/Atlassian "Atlassian") * [Autodesk](/wiki/Autodesk "Autodesk") * [Baker Hughes](/wiki/Baker_Hughes "Baker Hughes") * [Biogen](/wiki/Biogen "Biogen") * [Booking Holdings](/wiki/Booking_Holdings "Booking Holdings") * [Broadcom](/wiki/Broadcom "Broadcom") * [Cadence](/wiki/Cadence_Design_Systems "Cadence Design Systems") * [CDW](/wiki/CDW "CDW") * [Charter Communications](/wiki/Charter_Communications "Charter Communications") * [Cintas](/wiki/Cintas "Cintas") * [Cisco](/wiki/Cisco "Cisco") * [Coca-Cola Europacific Partners](/wiki/Coca-Cola_Europacific_Partners "Coca-Cola Europacific Partners") * [Cognizant](/wiki/Cognizant "Cognizant") * [Comcast](/wiki/Comcast "Comcast") * [Constellation Energy](/wiki/Constellation_Energy "Constellation Energy") * [Copart](/wiki/Copart "Copart") * [CoStar](/wiki/CoStar_Group "CoStar Group") * [Costco](/wiki/Costco "Costco") * [CrowdStrike](/wiki/CrowdStrike "CrowdStrike") * [CSX](/wiki/CSX_Corporation "CSX Corporation") * [Datadog](/wiki/Datadog "Datadog") * [Dexcom](/wiki/Dexcom "Dexcom") * [Diamondback Energy](/wiki/Diamondback_Energy "Diamondback Energy") * [Dollar Tree](/wiki/Dollar_Tree "Dollar Tree") * [DoorDash](/wiki/DoorDash "DoorDash") * [Electronic Arts](/wiki/Electronic_Arts "Electronic Arts") * [Exelon](/wiki/Exelon "Exelon") * [Fastenal](/wiki/Fastenal "Fastenal") * [Fortinet](/wiki/Fortinet "Fortinet") * [GE HealthCare](/wiki/GE_HealthCare "GE HealthCare") * [Gilead](/wiki/Gilead_Sciences "Gilead Sciences") * [GlobalFoundries](/wiki/GlobalFoundries "GlobalFoundries") * [Honeywell](/wiki/Honeywell "Honeywell") * [Idexx Laboratories](/wiki/Idexx_Laboratories "Idexx Laboratories") * [Illumina](/wiki/Illumina%2C_Inc. "Illumina, Inc.") * [Intel](/wiki/Intel "Intel") * [Intuit](/wiki/Intuit "Intuit") * [Intuitive Surgical](/wiki/Intuitive_Surgical "Intuitive Surgical") * [Keurig Dr Pepper](/wiki/Keurig_Dr_Pepper "Keurig Dr Pepper") * [KLA](/wiki/KLA_Corporation "KLA Corporation") * [Kraft Heinz](/wiki/Kraft_Heinz "Kraft Heinz") * [Lam Research](/wiki/Lam_Research "Lam Research") * [Lululemon](/wiki/Lululemon_Athletica "Lululemon Athletica") * [Marriott International](/wiki/Marriott_International "Marriott International") * [Marvell](/wiki/Marvell_Technology "Marvell Technology") * [Mercado Libre](/wiki/Mercado_Libre "Mercado Libre") * [Meta](/wiki/Meta_Platforms "Meta Platforms") * [Microchip](/wiki/Microchip_Technology "Microchip Technology") * [Micron](/wiki/Micron_Technology "Micron Technology") * Microsoft * [Moderna](/wiki/Moderna "Moderna") * [Mondelez International](/wiki/Mondelez_International "Mondelez International") * [MongoDB](/wiki/MongoDB_Inc. "MongoDB Inc.") * [Monster Beverage](/wiki/Monster_Beverage "Monster Beverage") * [Netflix](/wiki/Netflix%2C_Inc. "Netflix, Inc.") * [Nvidia](/wiki/Nvidia "Nvidia") * [NXP](/wiki/NXP_Semiconductors "NXP Semiconductors") * [O'Reilly Auto Parts](/wiki/O%27Reilly_Auto_Parts "O'Reilly Auto Parts") * [Old Dominion](/wiki/Old_Dominion_Freight_Line "Old Dominion Freight Line") * [onsemi](/wiki/Onsemi "Onsemi") * [Paccar](/wiki/Paccar "Paccar") * [Palo Alto Networks](/wiki/Palo_Alto_Networks "Palo Alto Networks") * [Paychex](/wiki/Paychex "Paychex") * [PayPal](/wiki/PayPal "PayPal") * [PDD Holdings](/wiki/Pinduoduo "Pinduoduo") * [PepsiCo](/wiki/PepsiCo "PepsiCo") * [Qualcomm](/wiki/Qualcomm "Qualcomm") * [Regeneron](/wiki/Regeneron_Pharmaceuticals "Regeneron Pharmaceuticals") * [Roper Technologies](/wiki/Roper_Technologies "Roper Technologies") * [Ross Stores](/wiki/Ross_Stores "Ross Stores") * [Sirius XM](/wiki/Sirius_XM "Sirius XM") * [Splunk](/wiki/Splunk "Splunk") * [Starbucks](/wiki/Starbucks "Starbucks") * [Synopsys](/wiki/Synopsys "Synopsys") * [Take-Two Interactive](/wiki/Take-Two_Interactive "Take-Two Interactive") * [T-Mobile](/wiki/T-Mobile_US "T-Mobile US") * [Tesla](/wiki/Tesla%2C_Inc. "Tesla, Inc.") * [Texas Instruments](/wiki/Texas_Instruments "Texas Instruments") * [Trade Desk](/wiki/The_Trade_Desk "The Trade Desk") * [Verisk](/wiki/Verisk_Analytics "Verisk Analytics") * [Vertex](/wiki/Vertex_Pharmaceuticals "Vertex Pharmaceuticals") * [Walgreens Boots Alliance](/wiki/Walgreens_Boots_Alliance "Walgreens Boots Alliance") * [Warner Bros. Discovery](/wiki/Warner_Bros._Discovery "Warner Bros. Discovery") * [Workday](/wiki/Workday%2C_Inc. "Workday, Inc.") * [Xcel Energy](/wiki/Xcel_Energy "Xcel Energy") * [Zscaler](/wiki/Zscaler "Zscaler") | |    | * [v](/wiki/Template%3ASeattle_Corporations "Template:Seattle Corporations") * [t](/wiki/Template_talk%3ASeattle_Corporations "Template talk:Seattle Corporations") * [e](/wiki/Special%3AEditPage/Template%3ASeattle_Corporations "Special:EditPage/Template:Seattle Corporations")  [Seattle-based Corporations](/wiki/List_of_companies_based_in_Seattle "List of companies based in Seattle") (within the [Seattle metropolitan area](/wiki/Seattle_metropolitan_area "Seattle metropolitan area")) | | | --- | --- | | [Seattle](/wiki/Seattle "Seattle") and [SeaTac](/wiki/SeaTac%2C_Washington "SeaTac, Washington")-based [Fortune 1000](/wiki/Fortune_1000 "Fortune 1000") corporations | * [Alaska Airlines](/wiki/Alaska_Airlines "Alaska Airlines") (#360) * [Amazon.com](/wiki/Amazon_%28company%29 "Amazon (company)") (#2) * [Expedia Group](/wiki/Expedia_Group "Expedia Group") (#263) * [Expeditors International](/wiki/Expeditors_International "Expeditors International") (#389) * [Nordstrom](/wiki/Nordstrom "Nordstrom") (#205) * [Starbucks](/wiki/Starbucks "Starbucks") (#114) * [Weyerhaeuser](/wiki/Weyerhaeuser "Weyerhaeuser") (#457) | | [Puget Sound](/wiki/Puget_Sound_region "Puget Sound region")-based [Fortune 1000](/wiki/Fortune_1000 "Fortune 1000") corporations | * Companies listed above, plus: [Costco Wholesale](/wiki/Costco "Costco") (#14) * Microsoft (#21) * [Paccar](/wiki/Paccar "Paccar") (#118) * [Puget Sound Energy](/wiki/Puget_Sound_Energy "Puget Sound Energy") (#710) | | Major [Seattle](/wiki/Seattle "Seattle")- and [Puget Sound](/wiki/Puget_Sound_region "Puget Sound region")-based non-public  or externally owned corporations | * [Big Fish Games](/wiki/Big_Fish_Games "Big Fish Games") * [Darigold](/wiki/Darigold "Darigold") * [Eddie Bauer](/wiki/Eddie_Bauer "Eddie Bauer") * [Jones Soda](/wiki/Jones_Soda "Jones Soda") * [Nash Holdings](/wiki/The_Washington_Post "The Washington Post") * [Nintendo of America](/wiki/Nintendo "Nintendo") * [QFC](/wiki/QFC "QFC") * [REI](/wiki/REI "REI") * [Safeco](/wiki/Safeco "Safeco") * [T-Mobile US](/wiki/T-Mobile_US "T-Mobile US") |    | * [v](/wiki/Template%3AElectronics_industry_in_the_United_States "Template:Electronics industry in the United States") * [t](/wiki/Template_talk%3AElectronics_industry_in_the_United_States "Template talk:Electronics industry in the United States") * [e](/wiki/Special%3AEditPage/Template%3AElectronics_industry_in_the_United_States "Special:EditPage/Template:Electronics industry in the United States")  [Electronics industry in the United States](/wiki/Electronics_industry_in_the_United_States "Electronics industry in the United States") | | | --- | --- | | Companies | |  |  | | --- | --- | | [Home appliances](/wiki/Home_appliance "Home appliance") | * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Bose](/wiki/Bose_Corporation "Bose Corporation") * [Cisco](/wiki/Cisco "Cisco") * [Corsair](/wiki/Corsair_Gaming "Corsair Gaming") * [Dell](/wiki/Dell "Dell") * [Dolby Laboratories](/wiki/Dolby_Laboratories "Dolby Laboratories") * [Element Electronics](/wiki/Element_Electronics "Element Electronics") * [Emerson Radio](/wiki/Emerson_Radio "Emerson Radio") * [Harman](/wiki/Harman_International "Harman International") * [Honeywell](/wiki/Honeywell "Honeywell") * [HP](/wiki/HP_Inc. "HP Inc.") * [InFocus](/wiki/InFocus "InFocus") * [Jensen Electronics](/wiki/Jensen_Electronics "Jensen Electronics") * [Kenmore](/wiki/Kenmore_%28brand%29 "Kenmore (brand)") * [Kingston](/wiki/Kingston_Technology "Kingston Technology") * [Kimball](/wiki/Kimball_International "Kimball International") * [Koss](/wiki/Koss_Corporation "Koss Corporation") * [Lexmark](/wiki/Lexmark "Lexmark") * [Logitech](/wiki/Logitech "Logitech") * [Magnavox](/wiki/Magnavox "Magnavox") * [Marantz](/wiki/Marantz "Marantz") * [Memorex](/wiki/Memorex "Memorex") * Microsoft * [Monster](/wiki/Monster_Cable "Monster Cable") * [Plantronics](/wiki/Plantronics "Plantronics") * [Planar Systems](/wiki/Planar_Systems "Planar Systems") * [Razer](/wiki/Razer_Inc "Razer Inc") * [Seagate](/wiki/Seagate_Technology "Seagate Technology") * [Seiki Digital](/wiki/Seiki_Digital "Seiki Digital") * [Skullcandy](/wiki/Skullcandy "Skullcandy") * [Turtle Beach](/wiki/Turtle_Beach_Corporation "Turtle Beach Corporation") * [ViewSonic](/wiki/ViewSonic "ViewSonic") * [Vizio](/wiki/Vizio "Vizio") * [Western Digital](/wiki/Western_Digital "Western Digital")   + [HGST](/wiki/HGST "HGST")   + [SanDisk](/wiki/SanDisk "SanDisk") * [Westinghouse Electric Company](/wiki/Westinghouse_Electric_Company "Westinghouse Electric Company") * [Westinghouse Electronics](/wiki/Westinghouse_Electronics "Westinghouse Electronics") * [Xerox](/wiki/Xerox "Xerox") | | [Electronic components](/wiki/Electronic_component "Electronic component") | * [3M](/wiki/3M "3M") * [Achronix](/wiki/Achronix "Achronix") * [Analog Devices](/wiki/Analog_Devices "Analog Devices")   + [Maxim Integrated](/wiki/Maxim_Integrated "Maxim Integrated") * [Applied Materials](/wiki/Applied_Materials "Applied Materials") * [Altera](/wiki/Altera "Altera") * [AVX](/wiki/AVX_Corporation "AVX Corporation") * [Cirque](/wiki/Cirque_Corporation "Cirque Corporation") * [Diodes Inc.](/wiki/Diodes_Incorporated "Diodes Incorporated") * [Flex](/wiki/Flex_%28company%29 "Flex (company)") * [Jabil](/wiki/Jabil "Jabil") * [KEMET](/wiki/KEMET_Corporation "KEMET Corporation") * [Maxwell Technologies](/wiki/Maxwell_Technologies "Maxwell Technologies") * [Sanmina](/wiki/Sanmina_Corporation "Sanmina Corporation") * [Vishay](/wiki/Vishay_Intertechnology "Vishay Intertechnology") | | [Semiconductor devices](/wiki/Semiconductor_device "Semiconductor device") | * [AMD](/wiki/AMD "AMD") * [Ampere Computing](/wiki/Ampere_Computing "Ampere Computing") * [Apple](/wiki/Apple_silicon "Apple silicon") * [Broadcom](/wiki/Broadcom "Broadcom") * [Cypress Semiconductor](/wiki/Cypress_Semiconductor "Cypress Semiconductor") * [GlobalFoundries](/wiki/GlobalFoundries "GlobalFoundries") * [IBM](/wiki/IBM "IBM") * [Intel](/wiki/Intel "Intel") * [Interlink](/wiki/Interlink_Electronics "Interlink Electronics") * [KLA-Tencor](/wiki/KLA-Tencor "KLA-Tencor") * [Lam Research](/wiki/Lam_Research "Lam Research") * [Lattice](/wiki/Lattice_Semiconductor "Lattice Semiconductor") * [Marvell Technology](/wiki/Marvell_Technology "Marvell Technology") * [Microchip](/wiki/Microchip_Technology "Microchip Technology") ([Atmel](/wiki/Atmel "Atmel")) * [Micron](/wiki/Micron_Technology "Micron Technology") * [NetApp](/wiki/NetApp "NetApp") * [Nimbus Data](/wiki/Nimbus_Data "Nimbus Data") * [Nvidia](/wiki/Nvidia "Nvidia")   + [Mellanox](/wiki/Mellanox_Technologies "Mellanox Technologies") * [NXP](/wiki/NXP_Semiconductors "NXP Semiconductors") * [Onsemi](/wiki/Onsemi "Onsemi") * [Qualcomm](/wiki/Qualcomm "Qualcomm") * [Silicon Image](/wiki/Silicon_Image "Silicon Image") * [Synaptics](/wiki/Synaptics "Synaptics") * [Tabula](/wiki/Tabula_%28company%29 "Tabula (company)") * [Texas Instruments](/wiki/Texas_Instruments "Texas Instruments") * [Xilinx](/wiki/Xilinx "Xilinx") * [Zilog](/wiki/Zilog "Zilog") | | [Mobile devices](/wiki/Mobile_device "Mobile device") | * [Apple](/wiki/Apple_Inc "Apple Inc") * [BLU](/wiki/BLU_Products "BLU Products") * [Google](/wiki/Google "Google") * [Lenovo](/wiki/Lenovo "Lenovo") ([Motorola Mobility](/wiki/Motorola_Mobility "Motorola Mobility")) | | Other | * [Cadence Design Systems](/wiki/Cadence_Design_Systems "Cadence Design Systems") * [Cray](/wiki/Cray "Cray") * [GE](/wiki/General_Electric "General Electric")   + [RCA](/wiki/RCA_%28trademark%29 "RCA (trademark)") * [Oracle Corporation](/wiki/Oracle_Corporation "Oracle Corporation") * [Synopsys](/wiki/Synopsys "Synopsys") | | | Defunct | * [Actel](/wiki/Actel "Actel") * [Atari Corporation](/wiki/Atari_Corporation "Atari Corporation") * [Commodore](/wiki/Commodore_International "Commodore International") * [Compaq](/wiki/Compaq "Compaq") * [Fairchild](/wiki/Fairchild_Semiconductor "Fairchild Semiconductor") * [Freescale](/wiki/Freescale_Semiconductor "Freescale Semiconductor") * [LSI](/wiki/LSI_Corporation "LSI Corporation") * [Microsemi](/wiki/Microsemi "Microsemi") * [National Semiconductor](/wiki/National_Semiconductor "National Semiconductor") * [Palm](/wiki/Palm_Inc "Palm Inc") * [Philco](/wiki/Philco "Philco") * [RCA](/wiki/RCA "RCA") * [Signetics](/wiki/Signetics "Signetics") * [Silicon Graphics](/wiki/Silicon_Graphics "Silicon Graphics") * [Solectron](/wiki/Solectron "Solectron") * [Sun Microsystems](/wiki/Sun_Microsystems "Sun Microsystems") * [Zenith Electronics](/wiki/Zenith_Electronics "Zenith Electronics") |    | * [v](/wiki/Template%3AMajor_computer_hardware_companies "Template:Major computer hardware companies") * [t](/wiki/Template_talk%3AMajor_computer_hardware_companies "Template talk:Major computer hardware companies") * [e](/wiki/Special%3AEditPage/Template%3AMajor_computer_hardware_companies "Special:EditPage/Template:Major computer hardware companies")  Major personal computer, server, and mainframe hardware companies | | | --- | --- | | Companies with an annual revenue of over US$3 billion | | | Personal computers and servers | * [Acer](/wiki/Acer_Inc. "Acer Inc.") * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Asus](/wiki/Asus "Asus") * [Dell](/wiki/Dell "Dell") * [Fujitsu](/wiki/Fujitsu "Fujitsu") * [Huawei](/wiki/Huawei "Huawei") * [HP](/wiki/HP_Inc. "HP Inc.") * [Lenovo](/wiki/Lenovo "Lenovo") * [LG](/wiki/LG_Electronics "LG Electronics") * Microsoft * [MSI](/wiki/Micro-Star_International "Micro-Star International") * [NEC](/wiki/NEC "NEC") * [Panasonic](/wiki/Panasonic "Panasonic") * [Razer](/wiki/Razer_Inc. "Razer Inc.") * [Samsung](/wiki/Samsung_Electronics "Samsung Electronics") * [Sharp](/wiki/Sharp_Corporation "Sharp Corporation") ([Dynabook](/wiki/Dynabook_Inc. "Dynabook Inc.")) * [Vaio](/wiki/Vaio "Vaio")   |  |  | | --- | --- | | Servers only | * [Cisco](/wiki/Cisco "Cisco") * [Dell EMC](/wiki/Dell_EMC "Dell EMC") * [HPE](/wiki/Hewlett_Packard_Enterprise "Hewlett Packard Enterprise") * [IBM](/wiki/IBM "IBM") * [Inspur](/wiki/Inspur "Inspur") * [NetApp](/wiki/NetApp "NetApp") * [Oracle](/wiki/Oracle_Corporation "Oracle Corporation") | | | Mainframes | * [Fujitsu](/wiki/Fujitsu "Fujitsu") * [HPE](/wiki/Hewlett_Packard_Enterprise "Hewlett Packard Enterprise") * [IBM](/wiki/IBM "IBM") | | See also  [Largest IT companies](/wiki/List_of_largest_information_technology_companies_by_revenue "List of largest information technology companies by revenue")  [Computer hardware manufacturers](/wiki/List_of_computer_hardware_manufacturers "List of computer hardware manufacturers")  [Home computer hardware companies](/wiki/Category%3AHome_computer_hardware_companies "Category:Home computer hardware companies")  [Server hardware](/wiki/Category%3AServer_hardware "Category:Server hardware")  [Mainframe computers](/wiki/Category%3AMainframe_computers "Category:Mainframe computers") | |    | * [v](/wiki/Template%3AMajor_Internet_companies "Template:Major Internet companies") * [t](/wiki/Template_talk%3AMajor_Internet_companies "Template talk:Major Internet companies") * [e](/wiki/Special%3AEditPage/Template%3AMajor_Internet_companies "Special:EditPage/Template:Major Internet companies")  Major [Internet](/wiki/Internet "Internet") companies | | | --- | --- | | Companies with an annual revenue of over US$4 billion | | | [Internet](/wiki/List_of_largest_Internet_companies "List of largest Internet companies") | * [Adobe](/wiki/Adobe_Inc. "Adobe Inc.") * [Alibaba](/wiki/Alibaba_Group "Alibaba Group") * [Alphabet](/wiki/Alphabet_Inc. "Alphabet Inc.")   + [Google](/wiki/Google "Google") * [Amazon](/wiki/Amazon_%28company%29 "Amazon (company)") * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Baidu](/wiki/Baidu "Baidu") * [IAC](/wiki/IAC_%28company%29 "IAC (company)") * [Kakao](/wiki/Kakao "Kakao") * [Meituan](/wiki/Meituan "Meituan") * [Meta](/wiki/Meta_Platforms "Meta Platforms")   + [Facebook](/wiki/Facebook "Facebook") * Microsoft * [Naver](/wiki/Naver_Corporation "Naver Corporation") * [NetEase](/wiki/NetEase "NetEase") * [Tencent](/wiki/Tencent "Tencent") * [Yandex](/wiki/Yandex "Yandex") | | Cloud computing | * [Akamai](/wiki/Akamai_Technologies "Akamai Technologies") * [Alibaba Cloud](/wiki/Alibaba_Cloud "Alibaba Cloud") * [AWS](/wiki/Amazon_Web_Services "Amazon Web Services") * [Apple iCloud](/wiki/ICloud "ICloud") * [Google](/wiki/Google_Cloud_Platform "Google Cloud Platform") * [IBM](/wiki/IBM_Cloud "IBM Cloud") * [Microsoft Azure](/wiki/Microsoft_Azure "Microsoft Azure") * [Oracle Corporation](/wiki/Oracle_Corporation "Oracle Corporation") * [Salesforce](/wiki/Salesforce "Salesforce") * [ServiceNow](/wiki/ServiceNow "ServiceNow") | | E-commerce | * [Amazon.com](/wiki/Amazon_%28company%29 "Amazon (company)") * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Booking Holdings](/wiki/Booking_Holdings "Booking Holdings") * [Coupang](/wiki/Coupang "Coupang") * [eBay](/wiki/EBay "EBay") * [Expedia](/wiki/Expedia "Expedia") * [Flipkart](/wiki/Flipkart "Flipkart") * [Groupon](/wiki/Groupon "Groupon") * [JD.com](/wiki/JD.com "JD.com") * [Lazada](/wiki/Lazada_Group "Lazada Group") * [Mercado Libre](/wiki/Mercado_Libre "Mercado Libre") * [Rakuten](/wiki/Rakuten "Rakuten") * [Shopee](/wiki/Shopee "Shopee") * [Shopify](/wiki/Shopify "Shopify") * [Suning.com](/wiki/Suning.com "Suning.com") * [Trip.com](/wiki/Trip.com "Trip.com") * [Uber](/wiki/Uber "Uber") * [Wayfair](/wiki/Wayfair "Wayfair") * [Zalando](/wiki/Zalando "Zalando") | | Media | * [Bloomberg](/wiki/Bloomberg_L.P. "Bloomberg L.P.") * [BuzzFeed](/wiki/BuzzFeed "BuzzFeed") * [ByteDance](/wiki/ByteDance "ByteDance") * [G/O Media](/wiki/G/O_Media "G/O Media") * [Kuaishou](/wiki/Kuaishou "Kuaishou") * [Netflix](/wiki/Netflix%2C_Inc. "Netflix, Inc.") * [Paramount Streaming](/wiki/Paramount_Streaming "Paramount Streaming") * [Spotify](/wiki/Spotify "Spotify") * [Warner Bros. Discovery](/wiki/Warner_Bros._Discovery "Warner Bros. Discovery") |    | * [v](/wiki/Template%3AMajor_software_companies "Template:Major software companies") * [t](/wiki/Template_talk%3AMajor_software_companies "Template talk:Major software companies") * [e](/wiki/Special%3AEditPage/Template%3AMajor_software_companies "Special:EditPage/Template:Major software companies")  Major [software](/wiki/Software "Software") companies | | | --- | --- | | Companies with annual software revenue of over US$3 billion | | | * [Adobe](/wiki/Adobe_Inc. "Adobe Inc.") * [Amadeus IT Group](/wiki/Amadeus_IT_Group "Amadeus IT Group") * [Amazon](/wiki/Amazon_%28company%29 "Amazon (company)") * [Apple](/wiki/Apple_Inc. "Apple Inc.") * [Autodesk](/wiki/Autodesk "Autodesk") * [Citrix](/wiki/Citrix_Systems "Citrix Systems") * [FIS](/wiki/FIS_%28company%29 "FIS (company)") * [Google](/wiki/Google "Google") * [HPE](/wiki/Hewlett_Packard_Enterprise "Hewlett Packard Enterprise") * [IBM](/wiki/IBM "IBM") * [Intuit](/wiki/Intuit "Intuit") * [Infor](/wiki/Infor "Infor") * Microsoft * [Oracle](/wiki/Oracle_Corporation "Oracle Corporation") * [Quest Software](/wiki/Quest_Software "Quest Software") * [Sage Group](/wiki/Sage_Group "Sage Group") * [SAP](/wiki/SAP "SAP") * [Tencent](/wiki/Tencent "Tencent") | | | See also  [Largest IT companies](/wiki/List_of_largest_technology_companies_by_revenue "List of largest technology companies by revenue")  [Largest software companies](/wiki/List_of_the_largest_software_companies "List of the largest software companies")  [Category:Software companies](/wiki/Category%3ASoftware_companies "Category:Software companies") | | | |

[Portals](/wiki/Wikipedia%3AContents/Portals "Wikipedia:Contents/Portals"):

* ![](//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Industry5.svg/19px-Industry5.svg.png) [Companies](/wiki/Portal%3ACompanies "Portal:Companies")
* ![flag](//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/21px-Flag_of_the_United_States.svg.png) [United States](/wiki/Portal%3AUnited_States "Portal:United States")

**Microsoft** at Wikipedia's [sister projects](/wiki/Wikipedia%3AWikimedia_sister_projects "Wikipedia:Wikimedia sister projects"):

* ![](//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/14px-Commons-logo.svg.png)**[Media](https://commons.wikimedia.org/wiki/Category%3AMicrosoft "c:Category:Microsoft")** from Commons
* ![](//upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/21px-Wikinews-logo.svg.png)**[News](https://en.wikinews.org/wiki/Category%3AMicrosoft "n:Category:Microsoft")** from Wikinews
* ![](//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/16px-Wikiquote-logo.svg.png)**[Quotations](https://en.wikiquote.org/wiki/Microsoft "q:Microsoft")** from Wikiquote
* ![](//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wikiversity_logo_2017.svg/21px-Wikiversity_logo_2017.svg.png)**[Resources](https://en.wikiversity.org/wiki/Portal%3A_Microsoft "v:Portal: Microsoft")** from Wikiversity

[47°38′23″N 122°7′42″W﻿ / ﻿47.63972°N 122.12833°W﻿ / 47.63972; -122.12833](https://geohack.toolforge.org/geohack.php?pagename=Microsoft&params=47_38_23_N_122_7_42_W_region:US_dim:540)

| [Authority control databases](/wiki/Help%3AAuthority_control "Help:Authority control") [![Edit this at Wikidata](//upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png)](https://www.wikidata.org/wiki/Q2283#identifiers "Edit this at Wikidata") | |
| --- | --- |
| International | * [ISNI](https://isni.org/isni/0000000121813404) * [VIAF](https://viaf.org/viaf/148809628) |
| National | * [Norway](https://authority.bibsys.no/authority/rest/authorities/html/90182985) * [Spain](http://catalogo.bne.es/uhtbin/authoritybrowse.cgi?action=display&authority_id=XX121178) * [France](https://catalogue.bnf.fr/ark%3A/12148/cb120673486) * [BnF data](https://data.bnf.fr/ark%3A/12148/cb120673486) * [Catalonia](https://cantic.bnc.cat/registre/981058512489506706) * [Germany](https://d-nb.info/gnd/5003949-0) * [Israel](http://olduli.nli.org.il/F/?func=find-b&local_base=NLX10&find_code=UID&request=987007265465105171) * [United States](https://id.loc.gov/authorities/n86810571) * [Sweden](https://libris.kb.se/86lpvmjs41cgxwv) * [Latvia](https://kopkatalogs.lv/F?func=direct&local_base=lnc10&doc_number=000083581&P_CON_LNG=ENG) * [Japan](https://id.ndl.go.jp/auth/ndlna/00322150) * [Czech Republic](https://aleph.nkp.cz/F/?func=find-c&local_base=aut&ccl_term=ica=kn20020321575&CON_LNG=ENG) * [Australia](https://nla.gov.au/anbd.aut-an35928074) * [Greece](https://data.nlg.gr/resource/authority/record44026) * [Croatia](http://katalog.nsk.hr/F/?func=direct&doc_number=000351632&local_base=nsk10) * [Poland](https://dbn.bn.org.pl/descriptor-details/9810635047505606) * [Portugal](http://id.bnportugal.gov.pt/aut/catbnp/135822) |
| Academics | * [CiNii](https://ci.nii.ac.jp/author/DA04359585?l=en) |
| Artists | * [ULAN](https://www.getty.edu/vow/ULANFullDisplay?find=&role=&nation=&subjectid=500333090) |
| People | * [Trove](https://trove.nla.gov.au/people/1149675) |
| Other | * [Encyclopedia of Modern Ukraine](http://esu.com.ua/search_articles.php?id=60519) * [IdRef](https://www.idref.fr/030109434) |

![](https://login.wikimedia.org/wiki/Special:CentralAutoLogin/start?type=1x1)

Retrieved from "<https://en.wikipedia.org/w/index.php?title=Microsoft&oldid=1213513440>"

[Categories](/wiki/Help%3ACategory "Help:Category"):

* [Companies in the Nasdaq-100](/wiki/Category%3ACompanies_in_the_Nasdaq-100 "Category:Companies in the Nasdaq-100")
* [Companies listed on the Nasdaq](/wiki/Category%3ACompanies_listed_on_the_Nasdaq "Category:Companies listed on the Nasdaq")
* [Microsoft](/wiki/Category%3AMicrosoft "Category:Microsoft")
* [1975 establishments in New Mexico](/wiki/Category%3A1975_establishments_in_New_Mexico "Category:1975 establishments in New Mexico")
* [1980s initial public offerings](/wiki/Category%3A1980s_initial_public_offerings "Category:1980s initial public offerings")
* [American brands](/wiki/Category%3AAmerican_brands "Category:American brands")
* [American companies established in 1975](/wiki/Category%3AAmerican_companies_established_in_1975 "Category:American companies established in 1975")
* [Business software companies](/wiki/Category%3ABusiness_software_companies "Category:Business software companies")
* [Cloud computing providers](/wiki/Category%3ACloud_computing_providers "Category:Cloud computing providers")
* [Companies based in Redmond, Washington](/wiki/Category%3ACompanies_based_in_Redmond%2C_Washington "Category:Companies based in Redmond, Washington")
* [Companies in the Dow Jones Global Titans 50](/wiki/Category%3ACompanies_in_the_Dow_Jones_Global_Titans_50 "Category:Companies in the Dow Jones Global Titans 50")
* [Companies in the Dow Jones Industrial Average](/wiki/Category%3ACompanies_in_the_Dow_Jones_Industrial_Average "Category:Companies in the Dow Jones Industrial Average")
* [Companies in the PRISM network](/wiki/Category%3ACompanies_in_the_PRISM_network "Category:Companies in the PRISM network")
* [Computer companies established in 1975](/wiki/Category%3AComputer_companies_established_in_1975 "Category:Computer companies established in 1975")
* [Computer companies of the United States](/wiki/Category%3AComputer_companies_of_the_United_States "Category:Computer companies of the United States")
* [Computer hardware companies](/wiki/Category%3AComputer_hardware_companies "Category:Computer hardware companies")
* [Computer systems companies](/wiki/Category%3AComputer_systems_companies "Category:Computer systems companies")
* [Customer relationship management software companies](/wiki/Category%3ACustomer_relationship_management_software_companies "Category:Customer relationship management software companies")
* [Electronics companies established in 1975](/wiki/Category%3AElectronics_companies_established_in_1975 "Category:Electronics companies established in 1975")
* [Electronics companies of the United States](/wiki/Category%3AElectronics_companies_of_the_United_States "Category:Electronics companies of the United States")
* [ERP software companies](/wiki/Category%3AERP_software_companies "Category:ERP software companies")
* [Mobile phone manufacturers](/wiki/Category%3AMobile_phone_manufacturers "Category:Mobile phone manufacturers")
* [Multinational companies headquartered in the United States](/wiki/Category%3AMultinational_companies_headquartered_in_the_United_States "Category:Multinational companies headquartered in the United States")
* [Software companies based in Washington (state)](/wiki/Category%3ASoftware_companies_based_in_Washington_%28state%29 "Category:Software companies based in Washington (state)")
* [Software companies established in 1975](/wiki/Category%3ASoftware_companies_established_in_1975 "Category:Software companies established in 1975")
* [Software companies of the United States](/wiki/Category%3ASoftware_companies_of_the_United_States "Category:Software companies of the United States")
* [Supply chain software companies](/wiki/Category%3ASupply_chain_software_companies "Category:Supply chain software companies")
* [Technology companies established in 1975](/wiki/Category%3ATechnology_companies_established_in_1975 "Category:Technology companies established in 1975")
* [Technology companies of the United States](/wiki/Category%3ATechnology_companies_of_the_United_States "Category:Technology companies of the United States")
* [Web service providers](/wiki/Category%3AWeb_service_providers "Category:Web service providers")

Hidden categories:

* [Pages with non-numeric formatnum arguments](/wiki/Category%3APages_with_non-numeric_formatnum_arguments "Category:Pages with non-numeric formatnum arguments")
* [Webarchive template wayback links](/wiki/Category%3AWebarchive_template_wayback_links "Category:Webarchive template wayback links")
* [CS1 maint: multiple names: authors list](/wiki/Category%3ACS1_maint%3A_multiple_names%3A_authors_list "Category:CS1 maint: multiple names: authors list")
* [Articles with short description](/wiki/Category%3AArticles_with_short_description "Category:Articles with short description")
* [Short description matches Wikidata](/wiki/Category%3AShort_description_matches_Wikidata "Category:Short description matches Wikidata")
* [Wikipedia pages semi-protected against vandalism](/wiki/Category%3AWikipedia_pages_semi-protected_against_vandalism "Category:Wikipedia pages semi-protected against vandalism")
* [Wikipedia indefinitely move-protected pages](/wiki/Category%3AWikipedia_indefinitely_move-protected_pages "Category:Wikipedia indefinitely move-protected pages")
* [Use American English from May 2019](/wiki/Category%3AUse_American_English_from_May_2019 "Category:Use American English from May 2019")
* [All Wikipedia articles written in American English](/wiki/Category%3AAll_Wikipedia_articles_written_in_American_English "Category:All Wikipedia articles written in American English")
* [Use mdy dates from March 2024](/wiki/Category%3AUse_mdy_dates_from_March_2024 "Category:Use mdy dates from March 2024")
* [Infobox network service provider ASN same as Wikidata](/wiki/Category%3AInfobox_network_service_provider_ASN_same_as_Wikidata "Category:Infobox network service provider ASN same as Wikidata")
* [Articles containing potentially dated statements from June 2023](/wiki/Category%3AArticles_containing_potentially_dated_statements_from_June_2023 "Category:Articles containing potentially dated statements from June 2023")
* [All articles containing potentially dated statements](/wiki/Category%3AAll_articles_containing_potentially_dated_statements "Category:All articles containing potentially dated statements")
* [Articles containing potentially dated statements from 2015](/wiki/Category%3AArticles_containing_potentially_dated_statements_from_2015 "Category:Articles containing potentially dated statements from 2015")
* [Articles containing potentially dated statements from 2023](/wiki/Category%3AArticles_containing_potentially_dated_statements_from_2023 "Category:Articles containing potentially dated statements from 2023")
* [All accuracy disputes](/wiki/Category%3AAll_accuracy_disputes "Category:All accuracy disputes")
* [Articles with disputed statements from May 2019](/wiki/Category%3AArticles_with_disputed_statements_from_May_2019 "Category:Articles with disputed statements from May 2019")
* [Articles containing potentially dated statements from January 2011](/wiki/Category%3AArticles_containing_potentially_dated_statements_from_January_2011 "Category:Articles containing potentially dated statements from January 2011")
* [Wikipedia articles in need of updating from March 2024](/wiki/Category%3AWikipedia_articles_in_need_of_updating_from_March_2024 "Category:Wikipedia articles in need of updating from March 2024")
* [All Wikipedia articles in need of updating](/wiki/Category%3AAll_Wikipedia_articles_in_need_of_updating "Category:All Wikipedia articles in need of updating")
* [OpenCorporates groupings](/wiki/Category%3AOpenCorporates_groupings "Category:OpenCorporates groupings")
* [Pages using Sister project links with wikidata namespace mismatch](/wiki/Category%3APages_using_Sister_project_links_with_wikidata_namespace_mismatch "Category:Pages using Sister project links with wikidata namespace mismatch")
* [Pages using Sister project links with hidden wikidata](/wiki/Category%3APages_using_Sister_project_links_with_hidden_wikidata "Category:Pages using Sister project links with hidden wikidata")
* [Coordinates not on Wikidata](/wiki/Category%3ACoordinates_not_on_Wikidata "Category:Coordinates not on Wikidata")
* [Articles with ISNI identifiers](/wiki/Category%3AArticles_with_ISNI_identifiers "Category:Articles with ISNI identifiers")
* [Articles with VIAF identifiers](/wiki/Category%3AArticles_with_VIAF_identifiers "Category:Articles with VIAF identifiers")
* [Articles with BIBSYS identifiers](/wiki/Category%3AArticles_with_BIBSYS_identifiers "Category:Articles with BIBSYS identifiers")
* [Articles with BNE identifiers](/wiki/Category%3AArticles_with_BNE_identifiers "Category:Articles with BNE identifiers")
* [Articles with BNF identifiers](/wiki/Category%3AArticles_with_BNF_identifiers "Category:Articles with BNF identifiers")
* [Articles with BNFdata identifiers](/wiki/Category%3AArticles_with_BNFdata_identifiers "Category:Articles with BNFdata identifiers")
* [Articles with CANTICN identifiers](/wiki/Category%3AArticles_with_CANTICN_identifiers "Category:Articles with CANTICN identifiers")
* [Articles with GND identifiers](/wiki/Category%3AArticles_with_GND_identifiers "Category:Articles with GND identifiers")
* [Articles with J9U identifiers](/wiki/Category%3AArticles_with_J9U_identifiers "Category:Articles with J9U identifiers")
* [Articles with LCCN identifiers](/wiki/Category%3AArticles_with_LCCN_identifiers "Category:Articles with LCCN identifiers")
* [Articles with Libris identifiers](/wiki/Category%3AArticles_with_Libris_identifiers "Category:Articles with Libris identifiers")
* [Articles with LNB identifiers](/wiki/Category%3AArticles_with_LNB_identifiers "Category:Articles with LNB identifiers")
* [Articles with NDL identifiers](/wiki/Category%3AArticles_with_NDL_identifiers "Category:Articles with NDL identifiers")
* [Articles with NKC identifiers](/wiki/Category%3AArticles_with_NKC_identifiers "Category:Articles with NKC identifiers")
* [Articles with NLA identifiers](/wiki/Category%3AArticles_with_NLA_identifiers "Category:Articles with NLA identifiers")
* [Articles with NLG identifiers](/wiki/Category%3AArticles_with_NLG_identifiers "Category:Articles with NLG identifiers")
* [Articles with NSK identifiers](/wiki/Category%3AArticles_with_NSK_identifiers "Category:Articles with NSK identifiers")
* [Articles with PLWABN identifiers](/wiki/Category%3AArticles_with_PLWABN_identifiers "Category:Articles with PLWABN identifiers")
* [Articles with PortugalA identifiers](/wiki/Category%3AArticles_with_PortugalA_identifiers "Category:Articles with PortugalA identifiers")
* [Articles with CINII identifiers](/wiki/Category%3AArticles_with_CINII_identifiers "Category:Articles with CINII identifiers")
* [Articles with ULAN identifiers](/wiki/Category%3AArticles_with_ULAN_identifiers "Category:Articles with ULAN identifiers")
* [Articles with Trove identifiers](/wiki/Category%3AArticles_with_Trove_identifiers "Category:Articles with Trove identifiers")
* [Articles with EMU identifiers](/wiki/Category%3AArticles_with_EMU_identifiers "Category:Articles with EMU identifiers")
* [Articles with SUDOC identifiers](/wiki/Category%3AArticles_with_SUDOC_identifiers "Category:Articles with SUDOC identifiers")

* This page was last edited on 13 March 2024, at 14:21 (UTC).
* Text is available under the [Creative Commons Attribution-ShareAlike License 4.0](//en.wikipedia.org/wiki/Wikipedia%3AText_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License);
  additional terms may apply. By using this site, you agree to the [Terms of Use](//foundation.wikimedia.org/wiki/Special%3AMyLanguage/Policy%3ATerms_of_Use) and [Privacy Policy](//foundation.wikimedia.org/wiki/Special%3AMyLanguage/Policy%3APrivacy_policy). Wikipedia® is a registered trademark of the [Wikimedia Foundation, Inc.](//www.wikimediafoundation.org/), a non-profit organization.

* [Privacy policy](https://foundation.wikimedia.org/wiki/Special%3AMyLanguage/Policy%3APrivacy_policy)
* [About Wikipedia](/wiki/Wikipedia%3AAbout)
* [Disclaimers](/wiki/Wikipedia%3AGeneral_disclaimer)
* [Contact Wikipedia](//en.wikipedia.org/wiki/Wikipedia%3AContact_us)
* [Code of Conduct](https://foundation.wikimedia.org/wiki/Special%3AMyLanguage/Policy%3AUniversal_Code_of_Conduct)
* [Developers](https://developer.wikimedia.org)
* [Statistics](https://stats.wikimedia.org/#/en.wikipedia.org)
* [Cookie statement](https://foundation.wikimedia.org/wiki/Special%3AMyLanguage/Policy%3ACookie_statement)
* [Mobile view](//en.m.wikipedia.org/w/index.php?title=Microsoft&mobileaction=toggle_view_mobile)

* [![Wikimedia Foundation](/static/images/footer/wikimedia-button.png)](https://wikimediafoundation.org/)
* [![Powered by MediaWiki](/static/images/footer/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)

* Toggle limited content width