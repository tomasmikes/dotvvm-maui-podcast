﻿using DotNetPodcasts.App.Web.Models;
using DotVVM.Framework.Binding;
namespace DotNetPodcasts.App.Web.Components.PodcastPlayer;

public class PodcastPlayer : DotvvmMarkupControlBase
{
    public PodcastPlayerModel PodcastPlayerModel
    {
        get { return (PodcastPlayerModel)GetValue(PodcastPlayerModelProperty); }
        set { SetValue(PodcastPlayerModelProperty, value); }
    }
    public static readonly DotvvmProperty PodcastPlayerModelProperty
        = DotvvmProperty.Register<PodcastPlayerModel, PodcastPlayer>(c => c.PodcastPlayerModel, null);
}