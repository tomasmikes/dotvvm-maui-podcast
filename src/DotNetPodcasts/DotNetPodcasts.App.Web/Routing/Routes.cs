﻿namespace DotNetPodcasts.App.Web.Routing
{
    public static class Routes
    {
        public static class Public
        {
            public static string Default = $"{nameof(Public)}_{nameof(Default)}";
            public static string PodcastDetail = $"{nameof(Public)}_{nameof(PodcastDetail)}";
        }
        public static class Error
        {
            public static string Error500 = $"{nameof(Error)}_{nameof(Error500)}";
            public static string Error404 = $"{nameof(Error)}_{nameof(Error404)}";
            public static string Error403 = $"{nameof(Error)}_{nameof(Error403)}";
        }
    }
}
