#  Neural Network Loss Landscapes: What do we know?

_Posted: 2/29/2021_

It's hard to overstate the efficacy of deep neural networks in both AI research and practice. Nearly all state-of-the-art models in AI research for vision, language, and speech utilize deep learning in some form. Outside of research, the accomplishments of large-scale neural network models have garnered significant attention from the general public. For example, you might have heard of [GPT-3](https://arxiv.org/abs/2005.14165), a gigantic neural language model that is capable of generating very human-like text. Or maybe you've heard of [DALL-E](https://openai.com/blog/dall-e/), a neural network capable of generating eerily realistic images from a user-input prompt. You've almost certainly heard of progress on self-driving cars - Tesla's [autopilot features](https://www.tesla.com/autopilotAI), for example, uses neural networks for image recognition.

However, despite the fact that neural networks (in combination with lots of data) have been the backbone of much of the recent progress in AI, the research community of machine learning still has a fairly weak grasp on _just why neural networks work so well_. The crux of the issue is that it is nearly always possible for a neural network to _memorize_ the training data - that is, a neural network can learn a solution which performs _perfectly_ on training data, and yet does no better than _random chance_ on data that it hasn't seen before (that is, the solution does not generalize to unseen data). Despite this fact, neural networks consistently find solutions that are able to generalize extremely well, which is why they are so pervasive in research and practice. One of the key questions in machine learning research right now is: **why does deep learning find generalizable solutions?**

Likely, a key factor in answering this question is the _loss landscape_ of neural networks. The loss landscape is what is traversed during neural network training via stochastic gradient descent (SGD) - as such, it is extremely likely that some structure of this loss landscape is a key in understanding why neural networks generalize so well.
In this post, I'll try to dig into some of the recent research surrounding the loss landscapes of neural networks and generalization, to get a birds-eye view of what we currently know and what we still are struggling to explain. Think of it as a survey! :)

_(From this point onwards, I'm going to refer to neural networks as NNs)_

## The Supposed Difficulty of Generalization in NNs

NNs pose an extremely difficult optimization challenge, due to the fact that their loss landscape is non-convex and _extremely_ high-dimensional. From an optimization perspective, in a perfect world we could simply look at all possible settings of weights in a neural network and select the setting which performs the best our training data. There are two problems with this ideal setting:

1. This is clearly impossible - searching over all possible weight settings of a neural network is an intractable problem.
2. There is no guarantee that this solution would actually generalize to data outside of the training data!

Issue 1 leaves us with approximate algorithms, such as [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), to attempt to find a good solution in an efficient manner. This entails often starting from a random point in the hypothesis class (a random assignment of weights), and using gradient-based methods to move from one point to another within the hypothesis class, ideally such that each step reduces the training error from the previous solution.
Early on in NN history, the "approximate" factor of SGD was considered a large problem - a lot of effort was devoted towards [addressing saddle-points](https://arxiv.org/pdf/1406.2572.pdf) in NN loss landscapes, and different optimizers such as [Adam](https://arxiv.org/pdf/1412.6980.pdf) or [RMSProp](http://www.cs.toronto.edu/~hinton/coursera/lecture6/lec6.pdf) were proposed, all in an attempt to better tackle the optimization problem of minimizing training data error.
However, [Goodfellow et al., 2015](https://arxiv.org/pdf/1412.6544.pdf) first noted that the training trajectory of NNs trained with SGD rarely seems to encounter local minima - training is often smooth, with error monotonically decreasing across training steps until negligible traning error is achieved.
Additionally, recent advancements in neural networks, such as residual (or skip) connections, coupled with higher and higher overparameterization, have resulted in much smoother, and easier to optimize loss landscapes:
![](blog_figs/nnlls/visualizing2.png)
_Figure ([Li et al., 2018](https://arxiv.org/pdf/1712.09913.pdf)): The addition of skip connections has a significant impact on the smoothness of the loss landscape._

As a result, using gradient descent with modern NNs can obtain near perfect accuracy on the training data ([Zhang et al., 2016](https://arxiv.org/pdf/1611.03530.pdf), [Du et al., 2019](https://arxiv.org/pdf/1810.02054.pdf), [Huang et al., 2019](https://arxiv.org/abs/1906.03291)). That is to say: in most cases of NN training these days, we can find a global minimizer to the optimization problem. So issue 1 turns out not to be a major problem for us.

Issue 2, however, is much more difficult to deal with. This issue is one of the key issues of machine learning, and learning theory in general - how do we leverage training data to find solutions that can perform well on unseen data?
Statistical learning theory attempts to give us bounds on how well we can expect a model to generalize given the complexity of the hypothesis class we're using to learn and the amount of training data we have.
The key issue with neural networks is that they are very expressive; in fact, they are [universal function approximators](https://www.sciencedirect.com/science/article/abs/pii/0893608089900208) - as such, standard metrics of complexity suggest that NNs are complex enough to completely memorize the entire training set without learning anything about the underlying data distribution. As a result, statistical learning theory gives us no theoretical guarantees that our NN solutions will generalize at all - how can we be sure that our solution won't just memorize (or overfit) the training data? We can't!

#### Fitting Noise & Bad Global Minima

In their seminal paper [Understanding deep learning requires rethinking generalization](https://arxiv.org/pdf/1611.03530.pdf), Zhang et al. _empirically_ demonstrated the following result:
**Neural networks are capable of perfectly fitting randomly labeled data.**


In a randomly labeled data setting, a NN is trained on training data with a random label. In such a setting, there is virtually no information about the output, given the input. The best anyone (or any machine) can do in this scenario is, given any input, to randomly guess a label. Thus, the only way to perform well on a training set with random labels is to _memorize_ the entire training set. [Zhang et al., 2016](https://arxiv.org/pdf/1611.03530.pdf) demonstrated that modern NNs are clearly capable of this, and thus they must clearly be capable of memorizing a training set with true labels as well. This has been corroborated by [Huang et al., 2020](https://arxiv.org/abs/1906.03291), who empirically demonstrated that there are several bad minima (solutions which perfectly classify the training data, but achieve near chance accuracy on test data) near the trajectory of a successfully trained model which achieves 98% accuracy on test data (shown below).

![](blog_figs/nnlls/bad-minima.png)
_Figure ([Huang et al., 2020](https://arxiv.org/abs/1906.03291)): A training trajectory of a model avoids several bad global optima to find a solution with good generalization._

This leads to one of the key questions of deep learning, currently: **Why do neural networks _prefer_ solutions that generalize to unseen data, rather than settling on solutions which simply memorize the training data without actually learning anything?**

## So, what do we know?

As you might guess, we don't yet have a clear answer to the above question. However, the answer likely lies, at least partially, in the structure of the extremely high-dimensional, difficult-to-conceptualize loss landscapes of our NNs. Through various theoretical and empirical analyses of neural network optimization, we have garnered a much deeper understanding of these loss landscapes and the behaviors of our optimization trajectories. Below, I will try to detail **what we know** about NN loss landscapes.

I've separated prior work into a few sections, for ease of reading (hopefully) - they are:

1. Wide Basins and Implicit Regularization
2. Intrinsic Dimensionality
3. Mode Connectivity and Basins
4. The 2 Phases of Training & Dynamics of SGD

This blog post doesn't say anything profound - it's just a collection of related work on the above ideas. However, I found collecting these works to be very helpful, and maybe you will find reading about them interesting!

### 1. Wide Basins and Implicit Regularization

_Key to our current understanding of generalization in neural networks is the properties of wide basins of attraction, and the role SGD plays in finding them._

Perhaps first posed by [Hochreiter and Schimhuber, 1996](https://www.bioinf.jku.at/publications/older/3304.pdf), and initially verified in modern NNs by [Keskar et al., 2017](https://arxiv.org/pdf/1609.04836.pdf), was the notion that **solutions which reside in flatter, wider basins of the loss landscape generalize better than solutions which reside in narrow basins.** Keskar et al. were demonstrating that stochastic gradient descent (SGD) with small batch sizes converged to wider basins than SGD with larger batch sizes, and that this was correlated with the better generalization properties seen by small batch-size solutions. However, this property has been shown to be true more generally ([Dziugaite and Roy, 2017](https://arxiv.org/abs/1703.11008), [Chaudhari et al., 2017](https://arxiv.org/abs/1611.01838), [Izmailov et al., 2018](https://arxiv.org/abs/1803.05407)). More recently, [Huang et al., 2020](https://arxiv.org/abs/1906.03291) provided visualizations corroborating the intuition that solutions in flatter basins of attraction tend to be solutions with wider margins.
![](blog_figs/nnlls/b-and-m4.png)
_Figure ([Huang et al., 2020](https://arxiv.org/abs/1906.03291)): Visualizations of basins of attraction surrounding a solution with a wide margin and a solution with small margins. The wide margin solution has a much wider, flatter surface._


Why might SGD prefer basins that are flatter? A common belief is that the "flatness" of a solution found by SGD is
tied to the _noise level_ of SGD.
As mentioned above, [Keskar et al., 2017](https://arxiv.org/pdf/1609.04836.pdf) demonstrated that SGD with smaller batch-sizes converged to flatter minima than SGD with large batch-sizes.
However, [Goyal et al., 2017](https://arxiv.org/abs/1706.02677) showed that one could train large-batch models to good generalization if the learning rate was appropriately scaled.
Since then, a number of works such as [Jaztersebski et al., 2018](https://arxiv.org/abs/1711.04623) and [Smith et al., 2017](https://arxiv.org/abs/1710.06451) have analyzed NN optimization with SGD as a Stochastic Differential Equation, showing that the batch-size and learning rate together determine the _temperature_ of SGD - the temperature, along with the covariance of a models gradients, determines the amount of noise present in a given run of SGD and is key to finding flatter minima. These findings suggest that SGD _implicitly_ regularizes neural networks by prefering flat minima to sharp minima, and this preference is a large part of why our networks do not overfit.

Further, [Huang et al., 2020](https://arxiv.org/abs/1906.03291) proposed that one of the reasons NN training may avoid poor global minima is due to the _size_ of good global minima - that is, **the wider the basin, the more likely we are to find it during noisy optimization**. They demonstrate that the _volume_ of basins around solutions with good magnitude are _thousands of orders of magnitude_ larger than the volume of basins with poorly generalizing solutions, suggesting that finding poor basins where solutions exhibit no generalization may be _nearly impossible_ via random walks.

### 2. Intrinsic Dimensionality

_It's well known that the obscene amount of parameters in NNs is typically a good thing - often, the more parameters the better we generalize... Which is why it's so interesting that often times we only need a fraction of the full parameter space to actually train well._

[Sagun et al., 2017](https://arxiv.org/pdf/1706.04454.pdf) were perhaps the first to deeply investigate the Hessian of modern NNs, and noticed that their eigenvalues tended to be composed of a few large-values, and many near-zero values. These findings suggested that _many directions in the loss landscape were very flat,_ and only a few steep directions determined the trajectory of neural networks.
This finding was corroborated by [Gur-Ari et al., 2018](https://arxiv.org/pdf/1812.04754.pdf) who showed that, early on into training, SGD would tend towards moving only in a small subspace of the loss landscape - the subspace determined by the top eigenvectors of the Hessian. This finding confirmed that the trajectory of neural networks was largely determined by a few directions in the loss landscape of high curvature, largely ignoring the many flat directions in the space. Further, Gur-Ari et al. provided evidence of a correlation between the number of classes in a classification problem and the number of non-trivial eigenvalues of the Hessian (which determined the dimension of the traversed subsapce).

Concurrently, [Li et al., 2018](https://arxiv.org/abs/1804.08838) found that a neural network could be optimized in a _random subspace_ of the full parameter space, and that good, generalizable solutions could still be found as long as the dimensionality of the subspace is sufficiently high. I almost want to restate that, because I find it so surprising - _you can fix your optimization to a random subspace, move **only** within that subspace, and still find a good solution_.
![](blog_figs/nnlls/subspace2.png)
_Figure ([Li et al., 2018](https://arxiv.org/abs/1804.08838)): A depiction of optimizing a 3-D problem in a 2-D landscape._

This was an exceptionally surprising finding as it suggested not only that good solutions to NNs exist on substantially lower-dimensional planes, but that there are _many_ good solutions (since the plane can be chosen randomly). They label the "minimum" dimensionality of the subspace necessary to still achieve good performance the **intrinsic dimensionality** of the task.
This finding is particularly surprising given the fact noted above - fully-dimensional neural networks already move in a small subspace of the loss landscape... what are the odds a random subspace overlaps with that subspace?

[Fort et al., 2018](https://arxiv.org/pdf/1807.02581.pdf) answered this by examining the intrinsic dimensionality of neural networks more deeply; they demonstrated the existence of what they termed the "Goldilocks zone", a region of particularly high positive curvature within neural network loss landscapes. They showed that high overlap between a random subspace and the Goldilocks zone was indicative of how well that subspace could be optimized.
This was because random subspaces initialized in the goldilocks zone had high curvature as well, benefiting from a large ratio of positive eigenvalues in their Hessians.
This finding helped explain why intrinsic dimensionality can succeed, despite the full parameter space only having relatively small number of directions of positive curvature.
![](blog_figs/nnlls/goldilocks2.png)
_Figure ([Fort et al., 2018](https://arxiv.org/pdf/1807.02581.pdf)): A depiction of the goldilocks zone in a 3-D space. A 2-D subspace is shown, with it's distance (r) from the origin of the 3-D space. Also shown are 1-D slices through the goldilocks zone, with depictions of loss curvature on these slices._

Fort et al. demonstrated that most common initialization techniques initialize to points _within_ the Goldilocks zone,
which helps explain why randomly optimizing a subspace of NNs worked so well in practice - often, that subspace was initialized within the Goldilocks zone, and thus still benefited from high positive curvature near initialization.

Highly related to intrinsic dimensionality are findings surrounding the seminal **lottery ticket hypothesis** [(Frankle & Carbin, 2019)](https://arxiv.org/abs/1803.03635). The lottery ticket hypothesis suggests that in any dense, randomly initialized feed-forward network there exists a _subnetwork_ (the winning lottery ticket) which can be trained, with all other weights set to $0$, and still achieve comparable accuracy to the original full network.
Although this finding only extends to more modern architectures with some caveats [(Frankle et al., 2019)](https://arxiv.org/abs/1903.01611v1), it is nevertheless an extremely surprising discovery...
prior subspace work did not _prune_ weights by explicitly setting them to $0$ - all weights were optimized, but the network was constrained to a "slice" of the parameter space. The LTH instead removes entire weights from the initial network before training, explicitly deleting certain dimensions from the parameter space.
Note that the subspace of the LTH is not random, however - it is intentionally chosen by first training a full network, pruning weights off iteratively, and then resetting the weights that are left at the end of training.
While a number of works have focused on ways to identify lottery tickets without training and pruning the full network, current proposed methods still fall short of the original iterative magnitude pruning [(Frankle et al., 2021)](https://arxiv.org/abs/2009.08576).

### 3. Mode Connectivity

_What happens if you draw a line between 2 separately initialized and trained neural networks, and walk across that line? As you might expect, we often encounter extremely high regions of loss (think crossing over mountains in between two valleys) - the loss surface of neural networks are highly non-convex, and it's not intuitive to believe that we can walk between one solution and another without needing to climb some mountains. However, interestingly... sometimes you can._

First conjectured by [Freemand and Bruna, 2017](https://openreview.net/pdf?id=Bk0FWVcgx), and later corroborated by [Draxler et al., 2018](https://arxiv.org/pdf/1803.00885.pdf) and [Garipov et al., 2018](https://arxiv.org/pdf/1802.10026.pdf) on more challenging settings, was the notion that 2 independently trained NN solutions could be connected by a _non-linear_ path through the loss landscape. This connecting path could be traversed without incurring a higher loss than the original 2 solutions, suggesting the existence of low-loss "tunnels" between local minima in the loss landscape.
![](blog_figs/nnlls/mc.png)
_Figure ([Draxler et al., 2018](https://arxiv.org/pdf/1803.00885.pdf)): A non-linear path between two solutions, and a linear path. Loss on the discovered, non-linear path remains constant, whereas walking across the linear path incurs a high increase in loss._

[Fort & Jastrzebski, 2019](https://arxiv.org/abs/1906.04724) built upon these findings to propose a large-scale model of NN loss landscapes - they suggest that NN solutions exist on high-dimensional _wedges_ that are all interconnected. This model potentially explains why we can find a low loss path between NN solutions; due to all wedges being connected we can move from one wedge to another by moving along the wedge edge (_lol_), but leaving a wedge (e.g. in a linear path) incurs high loss. They additionally show that solutions on the same wedge have extremely similar predictions, suggesting that each wedge may represent a unique "function" that the NN can represent.

![](blog_figs/nnlls/large-scale-loss-landscapes.png)
_Figure ([Fort & Jastrzebski, 2019](https://arxiv.org/abs/1906.04724)): A 3-dimensional example of the "wedges" proposed by Fort & Jastrzebski, 2019. The Left figure demonstrates 2 unique NN initializations (teal) and their optimization paths (pink), along with the linear path between them (green dashed line). We see that while the green line leaves the "wedges" (or disks in 3 dimensions), the blue-dashed non-linear line which traverses the wedge edges can maintain a low-loss connection. The central and right panels demonstrate this phenomena for 2 real NNs, over two distinct subspaces (one of which contains the low-loss tunnel along the wedge)._

More recently, [Frankle et al., 2020](https://arxiv.org/pdf/1912.05671.pdf) noted that _linearly_ connected solutions arise between models trained from the same checkpoint early into training. In other words, the mode or "basin", that a particular training trajectory will arive in is determined very early on in training, after which the random order of data does not matter. [Fort et al., 2020a](https://arxiv.org/pdf/1912.02757.pdf) demonstrated that models within the same mode (i.e. linear connected solutions) were more similar, in terms of their behavior, than solutions that resided in different modes. Further, they showed that, as you follow the non-linear path between 2 solutions in different modes, the function similarity switches from that of one mode to that of the other.
![](blog_figs/nnlls/fn-similarity.png)
_Figure ([Fort et al., 2020a](https://arxiv.org/pdf/1912.02757.pdf)): Measurements of local loss (left) and function similarity to solution 1 (middle) and solution 2 (right). The 2 solutions are in modes of similar loss, but each mode exhibits different behavior, functionally._

Tying this into the wedge hypothesis above, the "wedge" that will be converged to is determined early into training, and that solutions on the same wedge actually _are_ linearly connected by a low-loss path.
They use this finding to explain why sub-space based bayesian deep learning methods (which often involve averaging over multiple solutions in the same mode) provide worse predictive accuracy and estimates of uncertainty than traditional ensembles composed of models in different models.

Finally, [Fort et al., 2020b](https://arxiv.org/abs/2010.15110) demonstrate a connection between this phenomena of linear mode connectivity, and linearized training regimes related to the [neural tangent kernel (NTK)](https://arxiv.org/abs/1806.07572) - namely, that when a NN enters the phase during which it's final basin (or wedge) is pre-determined, then training dynamics become more and more linear, following the NTK. Prior to this phase, however, when basins are undetermined, training is highly non-linear and chaotic.


### 4. Phases of Training and the Dynamics of SGD

_I'll wrap things up with a more global perspective of NN optimization. In particular, it's remarkable how consistently the notion of 2 distinct phases of NN training continues to appear in current research, and I'll dig a bit into these studies here._

The notion of 2 distinct phases of neural network training is a fairly well established idea and has been corroborated in several different independent studies. For example, [Keskar et al., 2017](https://arxiv.org/pdf/1609.04836.pdf) demonstrated that, while large-batch SGD converges to sharp minima when trained from scratch, using large-batch SGD after a certain number of epochs of small-batch SGD results in flat, wide minima - similar to what is found by models fully trained with small-batch SGD. This suggests that the benefits of small-batch SGD occur _early on_ in optimization. [Golatkar et al., 2019](https://arxiv.org/abs/1905.13277) demonstrated similar results, finding that regularization and data augmentation played a large role in the generalizability of the NN _only at the beginning of training_ - i.e., they could be removed without harm after a certain number of training epochs. Naturally, again, the converse was not true.

Taking a slightly more "white-box" approach, [Achille et al., 2019](https://arxiv.org/abs/1711.08856)  utilize the fisher information matrix (FIM) of the NN to identify two distinct learning phases: one where the trace of the FIM grows rapidly, indicating the model is in regions of high curvature and that the model contains a high amount of information about the data, and a second where the FIM begins to decrease indicating a _compression_ of information about the data, and a flatter region of optimization. They find that impairments, such as image blurs, _introduced during the first phase can significantly hurt the NNs performance..._ However, when introduced in the second phase of training, they have little effect. These findings are related to the [information bottleneck in deep learning](https://arxiv.org/abs/1703.00810), which proposed that neural network training progresses in two phases: first maximizing the information between the inputs and the labels, then minimizing the mutual information between the input and the representations (this is framed as the neural network searching for the _minimal sufficient statistics_ with which to accurately predict the label given the input).

The notion that neural network solutions first travel through regions of high curvature before settling into a flat basin of attraction was also proposed by 
[Jastrzebski et al., 2019](https://arxiv.org/abs/1807.05031), who examined the behavior of the top eigenvalues of the Hessian throughout the entire training trajectory. The found that early on in training the top eigenvalues actually increase before steadily decreasing. This finding suggested that neural networks first move towards regions of higher and higher curvature along the directions of steepest descent, before moving to flatter and flatter regions.
![](blog_figs/nnlls/dynamics.png)
_Figure ([Jastrzebski et al., 2019](https://arxiv.org/abs/1807.05031)): (Left) A caricature of the trajectory of a NN through the loss landscape - the NN moves towards regions of higher curvature, eventually stepping over local minima.
(Middle, Right) Plots of the top egienvalues of the Hessian during training - the eigenvalues tend to spike early on in training, suggesting a movement torwards regions of high curvature, then decrease over time as the neural network moves to flatter regions. We can see that, even amongst only the top 30 eigenvalues of the Hessian, many remain close to zero._

Further, Jastrzebski et al. demonstrated the presence of _local minima_ along the directions of steepest descent, showing that SGD often would step _over_ these local minima. This finding was highly related to
[Goodfellow et al., 2015](https://arxiv.org/pdf/1412.6544.pdf), who first began examining the dynamics of learning by looking at the _true_ loss (i.e. not just the minibatch loss) at each step of SGD - Goodfellow et al. found that the true loss regularly monotonically decreased at each step, which implies that the trajectory of learning rarely had to overcome barriers or get out of local minima.
[Xing et al., 2018](https://arxiv.org/abs/1802.08770) built upon this finding, demonstrating that a linear interpolation between one step of SGD and the next often yielded a convex valley; again implying that most steps of SGD are jumping over local minima, avoiding barriers in the loss landscape by hopping from one valley wall to another.

More recently, [Li et al., 2020](https://arxiv.org/abs/1907.04595) examined the effects of using a large learning rate versus a small learning rate, and conjectured that the difference in generalization could be partially explained by the _difficulty of examples_ that large-learning rates prefer to learn first. [Jastrzebski et al., 2020](https://arxiv.org/abs/2002.09572) argue for the existence of a _break even point,_ a point during optimization when the variance of the gradients between different examples stops growing. They showed that models with appropriately high learning rates would hit this break even point and move into regions of good generalization; models with lower learning rates would instead keep moving into regions where gradient covariace continues to increase, suggesting poor conditioning.
![](blog_figs/nnlls/break-even.png)
_Figure ([Jastrzebski et al., 2020](https://arxiv.org/abs/2002.09572)): The trajectory of a NN with a high learning-rate (red) and low learning-rate (blue), depicted against the spectrum of the gradient covariance matrix (left) and accuracy (right). The model with the high learning-rate **breaks even** much sooner than the low learning-rate model, and quickly finds areas of higher accuracy._

Finally, as mentioned in section 3, notions of early versus late phases of training have been used to describe NN trajectories in terms of final destinations - in the latter phase of training, the mode of the final solution is determined, and will not change despite different data orders of data augmentations. This has been tied to several different NN phenomena:
[Frankle et al., 2020](https://arxiv.org/pdf/1912.05671.pdf) tied these two phases to when the lottery ticket hypothesis becomes stable in large neural networks. [Fort et al., 2020a](https://arxiv.org/pdf/1912.02757.pdf) tied these phases to function diversity, demonstrating that neural networks that arrive in the same mode have similar behaviors functionally, and thus ensemble less effectively. [Fort et al., 2020b](https://arxiv.org/abs/2010.15110) tied the determinism of mode to the linear behavior of NN trajectory, showing that once the deterministic phase was entered, NN trajectory could be approximated linearly, matching the behavior described by the Neural Tangent Kernel.

## Conclusions

We have (only very recently) begun to get a handle on understanding certain phenomena in neural network training, and understanding properties of the loss landscapes that we optimize is (I believe) key to this.

I think, however, that I will close with a couple disclaimers. First, you might have noticed that there are many visualizations in this post from several papers, each of which attempt to highlight some intution we have about neural networks. But don't be fooled...  visualizations of neural networks can give us inuitions, but not proof. These are 2 or 3 dimensional visualizations of over 1 million dimensional spaces, and while they can highlight properties they _cannot_ give us the whole story. As [Tom Goldstein](https://www.youtube.com/watch?v=kcVWAKf7UAg) likes to say, there could be wormholes in these figures that we just can't see.

Finally, by no means are any of these empirical findings conclusive. Many of these observations have been recorded only on small-ish neural networks, trained on datasets which, quite frankly, the community has beaten the crap out of. It remains a very open question of whether or not these findings readily generalize to state of the art models and datasets, or whether we can prove them analytically.
Moreover, understanding the structure of neural network loss landscapes is not the final step in understanding neural networks. We are still very far from understanding _why_ these certain structural properties are present in neural network loss landscapes - the answer to which we will likely not begin to uncover until we have a much better understanding these loss landscapes still. So, while current research is likely just the tip of the iceberg, hopefully I have managed to convince you that this area of research is fascinating and worth your attention.
I've certainly found it particularly inspiring recently.