import CommentModel from "../models/comment.model.js";


// To add comment
export async function addcomment(req, res) {
    try {
        let { video, message } = req.body;
        const comment = new CommentModel({ user: req.user._id, video, message })
        await comment.save();
        res.status(201).json({ message: "success", comment })
        // console.log(req.user);
    } catch (err) {
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}


export async function getCommentByVideoId(req, res) {
    try {
        let { videoId } = req.params
        const comments = await CommentModel.find({ video: videoId }).populate('user', 'channelName profilePic userName createdAt');
        res.status(200).json({ message: "success", comments })
        console.log(req.params);
    } catch (err) {
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}

// Delete comment controller
export async function deleteComment(req, res) {
    try {
        const { commentId } = req.params;
        const comment = await CommentModel.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Optional: Check if the logged-in user is the owner of the comment
        if (comment.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to delete this comment" });
        }

        await CommentModel.findByIdAndDelete(commentId);

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}
